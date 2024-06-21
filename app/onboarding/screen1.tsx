import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  default: {
    fontFamily: "Satoshi-Regular",
    letterSpacing: 0.5,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  logoImageView: {
    alignItems: 'center',
    marginTop: 40,
  },
  centerImage: {
    width: 300,
    height: 300,
  }
});

export default function OnboardingScreen1() {
  const router = useRouter()

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.logoImageView}>
        <Image source={require('@/assets/wordmark-40.png')} />
      </View>
      <Image source={require('@/assets/onboarding-1.png')} style={styles.centerImage} resizeMode='cover' />
      <View style={{rowGap: 28, marginBottom: 20}}>
        <View style={{ rowGap: 16 }}>
          <Text style={{ fontFamily: "Grotesk-Bold", fontSize: 35 }}>Welcome to Iskolar</Text>
          <Text style={{ fontFamily: "Satoshi-Regular", fontSize: 20, textAlign: 'center' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
        </View>
        <View style={{ rowGap: 12 }}>
          <Pressable style={{ backgroundColor: '#7F68FD', alignItems: 'center', paddingVertical: 16, borderRadius: 8 }} onPress={() => {router.push('/onboarding/screen2')}}>
            <Text style={[styles.default, { fontSize: 16, color: 'white', fontWeight: 'bold' }]}>Let's do it</Text>
          </Pressable>
          <Pressable style={{ alignItems: 'center', paddingVertical: 16, borderRadius: 8 }} onPress={() => {router.push('/userauth/screen1')}}>
            <Text style={[styles.default, { fontSize: 16, color: '#541675', fontWeight: 'bold' }]}>Skip onboarding</Text>
          </Pressable>
        </View>
      </View>
      {/* <Button title="Next" onPress={() => { router.push('/onboarding/screen2') }} /> */}
      {/* <Text style={{ fontFamily: "Satoshi-Regular", fontWeight: '200',}}>Open up App.js to start working on your app!</Text> */}
    </SafeAreaView>
  );
}


