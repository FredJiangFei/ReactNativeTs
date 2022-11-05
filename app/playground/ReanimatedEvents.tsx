import { Button, Text, View } from 'native-base';
import React from 'react';
import { TapGestureHandler } from 'react-native-gesture-handler';
import Animated, {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
} from 'react-native-reanimated';

export default function ReanimatedEvents() {
    const pressed = useSharedValue(false);
    const startingPosition = 100;
    const x = useSharedValue(startingPosition);
    const y = useSharedValue(startingPosition);

    const eventHandler = useAnimatedGestureHandler({
        onStart: (event, ctx) => {
            pressed.value = true;
        },
        onActive: (event, ctx) => {
            x.value = startingPosition + event.translationX;
            y.value = startingPosition + event.translationY;
        },
        onEnd: (event, ctx) => {
            pressed.value = false;
            x.value = withSpring(startingPosition);
            y.value = withSpring(startingPosition);
        },
    });

    const uas = useAnimatedStyle(() => {
        return {
            backgroundColor: pressed.value ? '#FEEF86' : '#001972',
            transform: [{ translateX: x.value }, { translateY: y.value }],
        };
    });

    return (
        <TapGestureHandler onGestureEvent={eventHandler}>
            <Animated.View
                style={[
                    { width: 50, height: 50, backgroundColor: '#001972', borderRadius: 25 },
                    uas,
                ]}
            />
        </TapGestureHandler>
    );
}
