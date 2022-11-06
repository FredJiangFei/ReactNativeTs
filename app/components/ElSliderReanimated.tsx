import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Box, Flex, Text } from 'native-base';
import colors from 'el/config/colors';
import Animated, {
    Extrapolation,
    interpolate,
    runOnJS,
    useAnimatedStyle,
    useSharedValue,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

const Thumb = ({ min, max, value, onChange, containerWidth }) => {
    const position = useSharedValue({ x: 0, y: 0 });
    const start = useSharedValue({ x: 0, y: 0 });

    const maxValue = useRef<number>(max);
    const minValue = useRef<number>(min);
    const [tempValue, setTempValue] = useState<any>(value);

    const calPos = v => {
        if (!max) return 0;
        return (containerWidth / max) * v;
    };
    const calValue = (pos: any) => {
        const newValue = Math.floor((maxValue.current / 256) * pos);

        if (newValue < minValue.current) return minValue;
        if (newValue > maxValue.current) return maxValue;

        return newValue;
    };

    useEffect(() => {
        position.value.x = calPos(value);
    }, [containerWidth, max]);

    useEffect(() => {
        maxValue.current = max;
    }, [max]);

    useEffect(() => {
        minValue.current = min;
    }, [min]);

    const updateTempValueWhenPan = () => {
        setTempValue(calValue(position.value.x));
    };

    const updateValueAfterPanEnd = () => {
        onChange(calValue(position.value.x));
    };

    const gesture = Gesture.Pan()
        .onUpdate(e => {
            position.value = {
                x: e.translationX + start.value.x,
                y: e.translationY + start.value.y,
            };
            runOnJS(updateTempValueWhenPan)();
        })
        .onEnd(() => {
            start.value = {
                x: position.value.x,
                y: position.value.y,
            };
            runOnJS(updateValueAfterPanEnd)();
        });

    const animatedStyles = useAnimatedStyle(() => {
        const translateX = interpolate(position.value.x, [0, 256], [0, 256], {
            extrapolateLeft: Extrapolation.CLAMP,
            extrapolateRight: Extrapolation.CLAMP,
        });

        return {
            transform: [{ translateX: translateX }],
        };
    });

    return (
        <GestureDetector gesture={gesture}>
            <Animated.View style={[styles.thumb, animatedStyles]}>
                <Text position="absolute" bottom={6} w={8}>
                    {tempValue}
                </Text>
            </Animated.View>
        </GestureDetector>
    );
};

export default function ElSlider({ min, max, value, onChange }) {
    const [containerWidth, setContainerWidth] = useState<number>(0);
    const thumb1 = useRef<number>(value[0]);
    const thumb2 = useRef<number>(value[1]);

    const onLayout = event => {
        const { width } = event.nativeEvent.layout;
        setContainerWidth(width);
    };

    const handleThumb1Change = newValue => {
        thumb1.current = newValue;
        emitNewValues(newValue, thumb2.current);
    };

    const handleThumb2Change = newValue => {
        thumb2.current = newValue;
        emitNewValues(newValue, thumb1.current);
    };

    const emitNewValues = (value1, value2) => {
        const newValues = value1 > value2 ? [value2, value1] : [value1, value2];
        onChange(newValues);
    };

    return (
        <Box p={2} mt={2}>
            <Flex onLayout={onLayout} h={8} justify="center">
                <Flex h={1} bgColor={colors.light}></Flex>
                <Thumb
                    min={min}
                    max={max}
                    value={thumb1.current}
                    onChange={handleThumb1Change}
                    containerWidth={containerWidth}
                />
                <Thumb
                    min={min}
                    max={max}
                    value={thumb2.current}
                    onChange={handleThumb2Change}
                    containerWidth={containerWidth}
                />
            </Flex>
            <Flex direction="row" justify="space-between">
                <Text>{min}</Text>
                <Text>{max}</Text>
            </Flex>
        </Box>
    );
}

const styles = StyleSheet.create({
    chevronDown: {
        position: 'absolute',
        top: '40%',
        right: 10,
    },
    thumb: {
        position: 'absolute',
        top: 0,
        height: 30,
        width: 30,
        borderWidth: 4,
        borderRadius: 15,
        backgroundColor: 'white',
        borderColor: colors.secondary,
        display: 'flex',
        alignItems: 'center',
    },
});
