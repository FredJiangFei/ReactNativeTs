import React from 'react'
import { Image, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export const PlayDemo: React.FC = () => {
    const getUsers = () => {
        console.log('Hello, world!!!!!!');
    }

  return <>
    <Ionicons name="md-checkmark-circle" size={32} color="green" />
      <Image
        source={require('../../assets/balloon.png')}
        fadeDuration={0}
        style={{ width: 50, height: 50 }}
      />
      <FontAwesome.Button name="facebook" backgroundColor="#3b5998">
        Login with Facebook
      </FontAwesome.Button>

      <TouchableOpacity
        onPress={getUsers}
        style={{ backgroundColor: 'blue' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Pick a photo</Text>
      </TouchableOpacity>
  </>
}
