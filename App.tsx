import AppNavigator from './app/navigation/AppNavigator';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react';
import { AuthContext } from './app/auth/context';
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';

export default function App() {
  const [user, setUser] = useState();
  const netInfo = useNetInfo();
  // netInfo.isInternetReachable

  const unsubscribe = NetInfo.addEventListener(state => {
    console.log('Connection type', state.type);
    console.log('Is connected?', state.isConnected);
  });
  unsubscribe();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <SafeAreaView style={styles.safeArea}>
        <AppNavigator />
        <StatusBar style='auto' />
      </SafeAreaView>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: 'hidden',
  },
});
