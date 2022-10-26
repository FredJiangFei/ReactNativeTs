import React, { useRef } from 'react';
import { StyleSheet, Animated, PanResponder } from 'react-native';
import { Box, Flex, Text } from 'native-base';
import colors from 'el/config/colors';

export default function ElSlider() {
    const rangeValue = [0, 100];
    const min = rangeValue[0];
    const max = rangeValue[1];

    const pan = useRef<any>(new Animated.ValueXY()).current;
    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                pan.setOffset({
                    x: pan.x._value,
                    y: pan.y._value,
                });
            },
            onPanResponderMove: Animated.event([null, { dx: pan.x }], {
                useNativeDriver: false,
            }),
            onPanResponderRelease: () => {
                pan.flattenOffset();
            },
        }),
    ).current;

    const pan2 = useRef<any>(new Animated.ValueXY()).current;
    const panResponder2 = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                pan2.setOffset({
                    x: pan2.x._value,
                    y: pan2.y._value,
                });
            },
            onPanResponderMove: Animated.event([null, { dx: pan2.x }], {
                useNativeDriver: false,
            }),
            onPanResponderRelease: () => {
                pan2.flattenOffset();
            },
        }),
    ).current;

    return (
        <Box mx={8}>
            <Flex h={8} justify="center">
                <Flex h={2} bgColor={colors.light}></Flex>
                <Animated.View
                    style={[
                        styles.thumb,
                        {
                            transform: [
                                {
                                    translateX: pan.x,
                                },
                                {
                                    translateY: 0,
                                },
                            ],
                        },
                    ]}
                    {...panResponder.panHandlers}></Animated.View>

                <Animated.View
                    style={[
                        styles.thumb,
                        {
                            transform: [
                                {
                                    translateX: pan2.x,
                                },
                                {
                                    translateY: 0,
                                },
                            ],
                        },
                    ]}
                    {...panResponder2.panHandlers}></Animated.View>
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
        backgroundColor: colors.white,
        borderColor: colors.secondary,
    },
});
