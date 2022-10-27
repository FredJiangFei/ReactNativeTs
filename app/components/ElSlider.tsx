import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, Animated, PanResponder } from 'react-native';
import { Box, Flex, Text } from 'native-base';
import colors from 'el/config/colors';

export default function ElSlider({ min, max, value, onChange }) {
    const pan = useRef<any>(new Animated.ValueXY()).current;
    const pan2 = useRef<any>(new Animated.ValueXY()).current;

    const [s1, setS1] = useState<number>(value[0]);
    const [s2, setS2] = useState<number>(value[1]);

    const [containerWidth, setContainerWidth] = useState<number>(0);
    const thumbSize = 15;

    useEffect(() => {
        pan.x.setValue(calPos(value[0]));
        pan2.x.setValue(calPos(value[1]));
    }, [min, max, value, containerWidth]);

    const onLayout = event => {
        const { width } = event.nativeEvent.layout;
        setContainerWidth(width);
    };

    const calPos = value => (containerWidth / max) * value;
    const calValue = pos => Math.floor((max / 256) * pos);

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                pan.setOffset({
                    x: pan.x._value,
                    y: pan.y._value,
                });
            },
            onPanResponderMove: (_, gesture) => {
                pan.x.setValue(gesture.dx);
                setS1(calValue(pan.x._value + pan.x._offset));
            },
            onPanResponderRelease: () => {
                pan.flattenOffset();

                onChange([calValue(pan.x._value), s2]);
            },
        }),
    ).current;

    const panResponder2 = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                pan2.setOffset({
                    x: pan2.x._value,
                    y: pan2.y._value,
                });
            },
            onPanResponderMove: (_, gesture) => {
                pan2.x.setValue(gesture.dx);
                setS2(calValue(pan2.x._value + pan2.x._offset));
            },
            onPanResponderRelease: () => {
                pan2.flattenOffset();

                onChange([s1, calValue(pan2.x._value)]);
            },
        }),
    ).current;

    return (
        <Box p={8}>
            <Flex onLayout={onLayout} h={8} justify="center">
                <Flex h={1} bgColor={colors.light}></Flex>
                <Animated.View
                    style={[
                        styles.thumb,
                        pan.getLayout(),
                        {
                            transform: [{ translateX: -thumbSize }],
                        },
                    ]}
                    {...panResponder.panHandlers}>
                    <Text position="absolute" bottom={6} w={8}>
                        {s1}
                    </Text>
                </Animated.View>
                <Animated.View
                    style={[
                        styles.thumb,
                        pan2.getLayout(),
                        {
                            transform: [{ translateX: -thumbSize }],
                        },
                    ]}
                    {...panResponder2.panHandlers}>
                    <Text position="absolute" bottom={6} w={8}>
                        {s2}
                    </Text>
                </Animated.View>

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
