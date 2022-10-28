import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, Animated, PanResponder } from 'react-native';
import { Box, Flex, Text } from 'native-base';
import colors from 'el/config/colors';

const Slider = ({ max, value, onChange, containerWidth }) => {
    const position = useRef<any>(new Animated.ValueXY()).current;
    const [tempValue, setTempValue] = useState<number>(value);

    const thumbSize = 15;
    const calPos = v => (containerWidth / max) * v;
    const calValue = pos => Math.floor((max / 256) * pos);

    useEffect(() => {
        position.x.setValue(calPos(value));
    }, [containerWidth]);

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
                position.getLayout(),
                {
                    transform: [{ translateX: -thumbSize }],
                },
            ]}
            {...panResponder.panHandlers}>
            {/* <Animated.View
                    style={[
                        styles.thumb,
                        {
                            transform: [
                                {
                                    translateX: pan2.x.interpolate({
                                        inputRange: [min, max],
                                        outputRange: [0 - thumbSize, containerWidth - thumbSize],
                                    }),
                                },
                            ],
                        },
                    ]}>
                    <Text position="absolute" bottom={6}>
                        {slider2}
                    </Text>
                </Animated.View> */}
            <Text position="absolute" bottom={6} w={8}>
                {tempValue}
            </Text>
        </Animated.View>
    );
};

export default function ElSlider({ min, max, value, onChange }) {
    const [containerWidth, setContainerWidth] = useState<number>(0);

    const onLayout = event => {
        const { width } = event.nativeEvent.layout;
        setContainerWidth(width);
    };

    const handleSlider1Change = v => {
        const changedValue = v > value[1] ? [value[1], v] : [v, value[1]];
        onChange(changedValue);
    };

    const handleSlider2Change = v => {
        const changedValue = v > value[0] ? [value[0], v] : [v, value[0]];
        onChange(changedValue);
    };

    return (
        <Box p={2}>
            <Flex onLayout={onLayout} h={8} justify="center">
                <Flex h={1} bgColor={colors.light}></Flex>
                <Slider
                    max={max}
                    value={value[0]}
                    onChange={handleSlider1Change}
                    containerWidth={containerWidth}
                />
                <Slider
                    max={max}
                    value={value[1]}
                    onChange={handleSlider2Change}
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
