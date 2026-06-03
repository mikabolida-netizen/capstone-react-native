import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, ActivityIndicator } from 'react-native';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const checkStatus = async () => {
      const userData = await AsyncStorage.getItem('user');
      if (userData) {
        router.replace('/home');
      } else {
        router.replace('/onboarding');
      }
    };
    checkStatus();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <ActivityIndicator size="large" color="#495E57" />
    </View>
  );
}