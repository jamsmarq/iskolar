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
    alignItems: 'flex-start',
    marginTop: 40,
    rowGap: 22
  },
  centerImage: {
    width: 300,
    height: 300,
  }
});

export default function UserAuthScreen1() {
  const router = useRouter()

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.logoImageView}>
        <Image source={require('@/assets/wordmark-40.png')} />
        <Text style={{ fontFamily: "Grotesk-Bold", fontSize: 35 }}>Student Discount
          and Deals App</Text>
      </View>
      <Image source={require('@/assets/onboarding-1.png')} style={styles.centerImage} resizeMode='cover' />
      <View style={{ rowGap: 28, marginBottom: 20, width: '100%' }}>
        <View style={{ rowGap: 12 }}>
          <Pressable style={{ backgroundColor: '#7F68FD', alignItems: 'center', paddingVertical: 16, borderRadius: 8 }} onPress={() => { router.push('/onboarding/screen2') }}>
            <Text style={[styles.default, { fontSize: 16, color: 'white', fontWeight: 'bold' }]}>Sign in account</Text>
          </Pressable>
          <Pressable style={{ alignItems: 'center', paddingVertical: 16, borderRadius: 8 }} onPress={() => { router.push('(tabs)') }}>
            <Text style={[styles.default, { fontSize: 16, color: '#541675', fontWeight: 'bold' }]}>Explore app first</Text>
          </Pressable>
        </View>
      </View>
      {/* <Button title="Next" onPress={() => { router.push('/onboarding/screen2') }} /> */}
      {/* <Text style={{ fontFamily: "Satoshi-Regular", fontWeight: '200',}}>Open up App.js to start working on your app!</Text> */}
    </SafeAreaView>
  );
}


