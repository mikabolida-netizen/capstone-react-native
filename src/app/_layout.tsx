import { Stack } from 'expo-router';
import { useFonts, MarkaziText_400Regular } from '@expo-google-fonts/markazi-text';
import { Karla_400Regular, Karla_700Bold } from '@expo-google-fonts/karla';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'MarkaziText': MarkaziText_400Regular,
    'Karla': Karla_400Regular,
    'Karla-Bold': Karla_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return <Stack screenOptions={{ headerShown: false }} />;
}