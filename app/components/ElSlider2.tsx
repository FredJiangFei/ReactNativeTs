import { Flex, Slider, Text } from 'native-base';
import React, { useState } from 'react';

export default function ElSlider({ value, min, max, onChange }) {
    const [range1, setRange1] = useState(value[0]);
    const [range2, setRange2] = useState(value[1]);

    const handleOnChange = (a, b) => {
        if (a > b) {
            onChange([b, a]);
        } else {
            onChange([a, b]);
        }
    };

    return (
        <>
            <Flex w="100%" direction="row" justifyContent="space-between">
                <Text>{min}</Text>
                <Text>{max}</Text>
            </Flex>
            <Slider
                defaultValue={range1}
                minValue={min}
                maxValue={max}
                colorScheme="cyan"
                onChange={v => {
                    setRange1(Math.floor(v));
                    handleOnChange(Math.floor(v), range2);
                }}>
                <Slider.Track>
                    <Slider.FilledTrack />
                </Slider.Track>
                <Slider.Thumb>
                    {range1 !== min && range1 !== max && (
                        <Text position="absolute" bottom={3} w={20}>
                            {range1}
                        </Text>
                    )}
                </Slider.Thumb>
            </Slider>
            <Slider
                defaultValue={range2}
                minValue={min}
                maxValue={max}
                colorScheme="cyan"
                onChange={v => {
                    setRange2(Math.floor(v));
                    handleOnChange(range1, Math.floor(v));
                }}>
                <Slider.Track>
                    <Slider.FilledTrack />
                </Slider.Track>
                <Slider.Thumb>
                    {range2 !== min && range2 !== max && (
                        <Text position="absolute" bottom={3} w={20}>
                            {range2}
                        </Text>
                    )}
                </Slider.Thumb>
            </Slider>
        </>
    );
}
