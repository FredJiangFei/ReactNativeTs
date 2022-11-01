import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, Animated, PanResponder } from 'react-native';
import { Box, Flex, Text } from 'native-base';
import colors from 'el/config/colors';

const Thumb = ({ min, max, value, onChange, containerWidth }) => {
    const position = useRef<any>(new Animated.ValueXY()).current;
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
        position.x.setValue(calPos(value));
    }, [containerWidth, max]);

    useEffect(() => {
        maxValue.current = max;
    }, [max]);

    useEffect(() => {
        minValue.current = min;
    }, [min]);

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                position.setOffset({
                    x: position.x._value,
                    y: position.y._value,
                });
            },
            onPanResponderMove: (_, gesture) => {
                position.x.setValue(gesture.dx);
                setTempValue(calValue(position.x._value + position.x._offset));
            },
            onPanResponderRelease: () => {
                position.flattenOffset();
                onChange(calValue(position.x._value));
            },
        }),
    ).current;

    return (
        <Animated.View
            style={[
                styles.thumb,
                {
                    transform: [
                        {
                            translateX: position.x.interpolate({
                                inputRange: [0, 256],
                                outputRange: [0, 256],
                                extrapolate: 'clamp',
                            }),
                        },
                    ],
                },
            ]}
            {...panResponder.panHandlers}>
            <Text position="absolute" bottom={6} w={8}>
                {tempValue}
            </Text>
        </Animated.View>
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
