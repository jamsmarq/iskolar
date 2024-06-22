import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    async function prepare() {
      try {
        // Check if fonts are loaded
        await Font.loadAsync({
          // satoshi
          'Satoshi-Regular': require('./assets/fonts/Satoshi-Regular.ttf'),
          'Satoshi-Bold': require('./assets/fonts/Satoshi-Bold.ttf'),

          // space grotesk
          'Grotesk-Regular': require('./assets/fonts/Grotesk-Regular.ttf'),
          'Grotesk-Bold': require('./assets/fonts/Grotesk-Bold.ttf'),
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

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady])

  if (!appIsReady) {
    return null
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar style="auto" />
      <Text style={{ fontFamily: "Grotesk-Bold", fontSize: 35}}>Welcome to Iskolar</Text>
      <Text style={{ fontFamily: "Satoshi-Regular", fontWeight: '200',}}>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
