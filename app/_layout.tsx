import { Stack } from 'expo-router/stack';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import * as Font from 'expo-font';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootSiblingParent } from 'react-native-root-siblings';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState(false)
  const [initialRoute, setInitialRoute] = useState('/onboarding/screen1')

  useEffect(() => {
    async function prepare() {
      try {
        // Check if fonts are loaded
        await Font.loadAsync({
          // satoshi
          'Satoshi-Regular': require('@/assets/fonts/Satoshi-Regular.ttf'),
          'Satoshi-Medium': require('@/assets/fonts/Satoshi-Medium.ttf'),
          'Satoshi-Bold': require('@/assets/fonts/Satoshi-Bold.ttf'),

          // space grotesk
          'Grotesk-Regular': require('@/assets/fonts/Grotesk-Regular.ttf'),
          'Grotesk-Bold': require('@/assets/fonts/Grotesk-Bold.ttf'),
        })

        // Check if onboarding has been completed
        // const value = await AsyncStorage.getItem('hasSeenOnboarding')
        // if (value !== null) { setInitialRoute('(tabs)') }

        // Artificial two seconds delay
        // await new Promise(resolve => setTimeout(resolve, 2000))
      } catch (e) {
        console.warn(e)
      } finally {
        setAppIsReady(true)
      }
    }

    prepare()
  }, [])

  useEffect(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
      console.log(initialRoute)
    }
  }, [appIsReady, initialRoute])

  if (!appIsReady) {
    return null
  }

  return (
    <RootSiblingParent>
      <Stack initialRouteName={initialRoute}>
        <Stack.Screen name="onboarding" options={{ headerShown: false }} />
        <Stack.Screen name="userauth" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </RootSiblingParent>
  );
}
