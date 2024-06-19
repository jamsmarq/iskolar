import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function OnboardingScreen2() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{ fontFamily: "Grotesk-Bold", fontSize: 35}}>ONBOARDING 2</Text>
      <Button title="Next" onPress={() => {router.push('/onboarding/screen3')}} />
      <Button title="Prev" onPress={() => {router.push('/onboarding/screen1')}} />
      {/* <Text style={{ fontFamily: "Satoshi-Regular", fontWeight: '200',}}>Open up App.js to start working on your app!</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


