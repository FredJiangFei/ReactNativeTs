import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Pressable,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import ElIcon from './ElIcon';

const ElCamera = ({ children, onSelectImage, ...rest }) => {
  const [type, setType] = useState(CameraType.back);
  const [isOpenCamera, setIsOpenCamers] = useState(false);
  let camera;

  const openCameraPickerAsync = async () => {
    let permissionResult = await Camera.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }
    setIsOpenCamers(true);
  };

  const toggleCameraType = () => {
    setType(current =>
      current === CameraType.back ? CameraType.front : CameraType.back,
    );
  };

  const takePicture = async () => {
    if (camera) {
      let photo = await camera.takePictureAsync();
      if (photo.cancelled === true) {
        return;
      }

      setIsOpenCamers(false);
      onSelectImage(photo);
    }
  };

  return (
    <>
      <Pressable onPress={openCameraPickerAsync} {...rest}>
        {children}
      </Pressable>

      <Modal visible={isOpenCamera} animationType='slide'>
          <Camera style={styles.camera} type={type} ref={ref => (camera = ref)}>
            <View style={styles.options}>
              <TouchableOpacity
                style={styles.toggle}
                onPress={toggleCameraType}
              >
                <ElIcon
                  name='swap-horizontal'
                  style={{ color: '#fff', fontSize: 40 }}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.take} onPress={takePicture}>
                <ElIcon name='camera' style={{ color: '#fff', fontSize: 40 }} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.close}
                onPress={() => setIsOpenCamers(false)}
              >
                <ElIcon
                  name='chevron-down'
                  style={{ color: '#fff', fontSize: 40 }}
                />
              </TouchableOpacity>
            </View>
          </Camera>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  camera: {
    height: '100%',
    width: '100%',
  },
  options: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  toggle: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  take: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  close: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});

export default ElCamera;
