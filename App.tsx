import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function App() {
  const getUsers = () => {
    console.log('Hello, world!!!!!!');
  }

  const colorScheme = useColorScheme();

  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <Text>Hello RN</Text>
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
      <Image
        source={require('./assets/balloon.png')}
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

      <Text style={[themeTextStyle]}>Color scheme: {colorScheme}</Text>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightContainer: {
    backgroundColor: '#d0d0c0',
  },
  darkContainer: {
    backgroundColor: '#242c40',
  },
  lightThemeText: {
    color: '#242c40',
  },
  darkThemeText: {
    color: '#d0d0c0',
  },
});
