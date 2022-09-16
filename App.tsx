import AppNavigator from './app/navigation/AppNavigator';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react';
import { AuthContext } from './app/auth/context';
import OfflineNotice from './app/parts/offlineNotice';

export default function App() {
  const [user, setUser] = useState();

  return (
    <>
      <OfflineNotice />
      <AuthContext.Provider value={{ user, setUser }}>
        <SafeAreaView style={styles.safeArea}>
          <AppNavigator />
          <StatusBar style='auto' />
        </SafeAreaView>
      </AuthContext.Provider>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: 'hidden',
  },
});
