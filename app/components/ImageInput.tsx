import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import colors from '../config/colors';

export default function ImageInput({ onChangeImage }) {
  useEffect(() => {
    requestCameraPermission();
  }, []);

  const requestPicturePermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert('You need to enable permission to access the library.');
  };

  const requestCameraPermission = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA);
    if (!granted) alert('You need to enable permission to access the camera.');
  };

  const handlePress = () => {
    takeImage();
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });

      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log('Error reading an image', error);
    }
  };

  const takeImage = async () => {
    const image: any = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    onChangeImage(image.uri);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        <MaterialCommunityIcons color={colors.medium} name='camera' size={40} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: colors.light,
  },
});
