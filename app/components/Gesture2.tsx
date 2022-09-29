import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue } from "react-native-reanimated";

export default function Gesture2() {
    const isPressed = useSharedValue(false);
    const offset = useSharedValue({ x: 0, y: 0 });
  
    const animatedStyles = useAnimatedStyle(() => {
      return {
        transform: [
          { translateX: offset.value.x },
          { translateY: offset.value.y },
        ],
        backgroundColor: isPressed.value ? 'blue' : '#ccc',
      };
    });
  
    const dragGesture = Gesture.Pan()
      .onBegin(() => {
        isPressed.value = true;
      })
      .onChange((e) => {
        offset.value = {
          x: e.changeX + offset.value.x,
          y: e.changeY + offset.value.y,
        };
      })
      .onFinalize(() => {
        isPressed.value = false;
      });
  
    return (
      <GestureDetector gesture={dragGesture}>
        <Animated.View style={[{ width: 100, height: 100, borderRadius: 100, }, animatedStyles]} />
      </GestureDetector>
    );
  }
  