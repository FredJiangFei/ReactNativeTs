import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, Animated, PanResponder } from 'react-native';
import { Box, Flex, Text } from 'native-base';

const Thumb = ({ max, value, onChange, containerWidth }) => {
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
    }

    return (
        <Box p={2}>
            <Flex onLayout={onLayout} h={8} justify="center">
                <Flex h={1} bgColor='gray.200'></Flex>
                <Thumb
                    max={max}
                    value={thumb1.current}
                    onChange={handleThumb1Change}
                    containerWidth={containerWidth}
                />
                <Thumb
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
        borderColor: 'red',
        display: 'flex',
        alignItems: 'center',
    },
});
