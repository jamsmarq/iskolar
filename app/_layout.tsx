import { Stack } from 'expo-router/stack';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import * as Font from 'expo-font';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    async function prepare() {
      try {
        // Check if fonts are loaded
        await Font.loadAsync({
          // satoshi
          'Satoshi-Regular': require('../assets/fonts/Satoshi-Regular.ttf'),
          'Satoshi-Bold': require('../assets/fonts/Satoshi-Bold.ttf'),

          // space grotesk
          'Grotesk-Regular': require('../assets/fonts/Grotesk-Regular.ttf'),
          'Grotesk-Bold': require('../assets/fonts/Grotesk-Bold.ttf'),
        })

        // Artificial two seconds delay
        await new Promise(resolve => setTimeout(resolve, 2000))
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
    }
  }, [appIsReady])

  if (!appIsReady) {
    return null
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
    </Stack>
  );
}
