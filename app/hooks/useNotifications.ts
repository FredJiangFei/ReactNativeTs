import { Platform } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import routes from '../navigation/routes';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export const useNotifications = ({ navigation }) => {
  const [token, setToken] = useState('');
  const [notification, setNotification] = useState(false);
  const listener: any = useRef();
  const resListener: any = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setToken(token));

    listener.current = Notifications.addNotificationReceivedListener((n: any) =>
      setNotification(n),
    );

    resListener.current = Notifications.addNotificationResponseReceivedListener(
      res => {
        navigation.navigate(routes.Achievement);
      },
    );

    return () => {
      Notifications.removeNotificationSubscription(listener.current);
      Notifications.removeNotificationSubscription(resListener.current);
    };
  }, []);

  const registerForPushNotificationsAsync = async () => {
    let token;
    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();

      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }

      token = (await Notifications.getExpoPushTokenAsync()).data;
    } else {
      alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }

    return token;
  };

  async function sendNotification(token) {
    const message = {
      to: token,
      sound: 'default',
      title: 'Original Title',
      body: 'And here is the body!',
      data: { someData: 'goes here' },
    };

    await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
  }

  const sendLocalNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Hello React Native",
        body: 'Here is the notification body!!!!',
        data: { data: 'goes here' },
      },
      trigger: { seconds: 2 },
    });
  };

  return { sendNotification, sendLocalNotification, token, notification };
};
