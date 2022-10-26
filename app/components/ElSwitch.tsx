import React, { useRef, useEffect } from 'react';
import { Animated, StyleSheet } from 'react-native';
import colors from 'el/config/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { Flex, Pressable, Text, Switch } from 'native-base';

const ElSwitch = ({ text, value, onToggle, ...rest }) => {
    const initValue = value ? 48 : 8;
    const progress = useRef(new Animated.Value(initValue)).current;

    const onToggleSwitch = async () => {
        const toggleTo = value ? 8 : 48;
        await onToggle(!value);
        Animated.timing(progress, {
            toValue: toggleTo,
            duration: 500,
            useNativeDriver: false,
        }).start();
    };

    return (
        <Flex direction="row" align="center" justify="space-between" {...rest}>
            <Text color={colors.medium}>{text}</Text>
            <Switch
                trackColor={{ false: colors.medium, true: colors.primary }}
                thumbColor={colors.white}
                onToggle={() => onToggle(!value)}
                value={value}
            />
            <Pressable onPress={onToggleSwitch}>
                <LinearGradient {...colors.linear} style={{ borderRadius: 10 }}>
                    <Flex direction="row" justify="space-between">
                        <Animated.View style={[styles.slider, { left: progress }]} />
                        <Flex justify="center" align="center" w={10} h={9} ml={2}>
                            <Text color={colors.white} fontSize={12}>
                                No
                            </Text>
                        </Flex>
                        <Flex justify="center" align="center" w={10} h={9} mr={2}>
                            <Text color={colors.white} fontSize={12}>
                                Yes
                            </Text>
                        </Flex>
                    </Flex>
                </LinearGradient>
            </Pressable>
        </Flex>
    );
};

const styles = StyleSheet.create({
    slider: {
        backgroundColor: colors.secondary,
        width: 42,
        height: 24,
        position: 'absolute',
        top: 6,
        borderRadius: 5,
    },
});

export default ElSwitch;
