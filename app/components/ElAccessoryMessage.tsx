import React, { useEffect, useState, useRef } from 'react';
import colors from '../config/colors';
import { Platform, InputAccessoryView, ActivityIndicator, Keyboard } from 'react-native';
import { Box, Flex, Input, Pressable } from 'native-base';
import ElAvatar from './ElAvatar';
import { useAuth } from 'el/utils';
import ForumSvg from 'el/svgs/forumSvg';
import { useDispatch } from 'react-redux';
import { ADD_MESSAGE } from 'el/store/slices/messageSlice';

const ElAccessoryMessage: React.FC = () => {
    if (Platform.OS !== 'ios') return null;

    const { user } = useAuth();
    const [loading, setLoading] = useState(false);
    const [isShowAccessory, setIsShowAccessory] = useState<boolean>();
    const [text, setText] = useState<string>('');
    const inputRef = useRef<any>();
    const dispatch = useDispatch();

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardWillShow', () => {
            setIsShowAccessory(true);
        });

        const keyboardDidHideListener = Keyboard.addListener('keyboardWillHide', () => {
            setIsShowAccessory(false);
        });

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    useEffect(() => {
        if (!isShowAccessory) return;

        inputRef.current.focus();
    }, [isShowAccessory]);

    const handleInputDone = () => {
        dispatch(ADD_MESSAGE(text));
        dismissKeyboard();
        if (text) {
            setText('');
            inputRef?.current?.clear();
        }
    }

    const dismissKeyboard = () => {
        setTimeout(() => {
            Keyboard.dismiss();
        }, 200);
    }

    return (
        <InputAccessoryView nativeID="InputAccessoryMessage">
            <Box bgColor={colors.white} px={2} py={1}>
                <Flex direction="row" p={1} borderRadius={25} bgColor={colors.light}>
                    <ElAvatar uri={user?.pictureUrl} size={40} />
                    <Input
                        autoCapitalize="none"
                        autoCorrect={false}
                        ref={inputRef}
                        autoFocus
                        flex={1}
                        mx={2}
                        onBlur={dismissKeyboard}
                        borderWidth={0}
                        bgColor={colors.light}
                        onSubmitEditing={handleInputDone}
                        onChangeText={setText}
                        enablesReturnKeyAutomatically
                        returnKeyType="send"
                        placeholder='Leave a comment'
                    />
                    <Flex
                        justify="center"
                        align="center"
                        h={10}
                        w={10}
                        bgColor={colors.secondary}
                        opacity={loading ? 0.5 : 1}
                        borderRadius={20}>
                        <Pressable onPress={handleInputDone} disabled={loading}>
                            <ForumSvg />
                            {loading && (
                                <ActivityIndicator
                                    color={colors.primary}
                                    style={{ position: 'absolute' }}
                                />
                            )}
                        </Pressable>
                    </Flex>
                </Flex>
            </Box>

        </InputAccessoryView>
    );
};

export default ElAccessoryMessage;
