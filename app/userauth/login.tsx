import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, Alert, KeyboardAvoidingView, ScrollView, Platform, ActivityIndicator, Keyboard } from 'react-native';
import { User, Lock } from 'lucide-react-native';
import CustomTextInput from '@/components/CustomTextInput';
import { login } from '@/services/authService';

const styles = StyleSheet.create({
  default: {
    fontFamily: "Satoshi-Regular",
    letterSpacing: 0.5,
  },
  keyboardAvoidingView: {
    flex: 1,
    alignItems: 'center',
    rowGap: 32,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 32,
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

export default function LoginScreen() {
  const [logincred, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isFormSubmitted, setFormSubmitted] = useState(false)

  const router = useRouter()

  const handleLogin = async () => {
    Keyboard.dismiss()
    setFormSubmitted(true)

    try {
      const response = await login(logincred, password)
      if (response) { router.push('/(tabs)/index')}

    } catch (error: any) {
      // temp: show a friendly error alert
      Alert.alert('Login failed', error.message)
    }

    setFormSubmitted(false)
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0} enabled>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={{ rowGap: 32 }} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'handled'}>
        <View style={styles.logoImageView}>
          <Image source={require('@/assets/wordmark.png')} />
        </View>
        <View style={{ rowGap: 4, alignItems: 'center' }}>
          <Text style={{ fontFamily: "Grotesk-Bold", fontSize: 32 }}>Welcome Back!</Text>
          <Text style={{ fontFamily: "Satoshi-Regular", fontSize: 16 }}>Please enter your details to continue.</Text>
        </View>
        <View style={{ width: '100%', rowGap: 28 }}>
          <CustomTextInput Icon={User} placeholder='' onChangeText={setUsername} value={logincred} label='Username/Email/Phone' />

          <CustomTextInput Icon={Lock} placeholder='' onChangeText={setPassword} value={password} label='Password' isPassword={true} />
        </View>
        <View style={{ rowGap: 28, marginBottom: 20, width: '100%' }}>
          <View style={{ rowGap: 12 }}>
            <Pressable style={{ backgroundColor: '#7F68FD', alignItems: 'center', paddingVertical: 16, borderRadius: 8 }} onPress={handleLogin} disabled={isFormSubmitted}>
              {isFormSubmitted
                ? <ActivityIndicator color='white' size='small' />
                : <Text style={[styles.default, { fontSize: 16, color: 'white', fontWeight: 'bold' }]}>Login to my account</Text>
              }
            </Pressable>

            <Pressable style={{ alignItems: 'center', paddingVertical: 16, borderRadius: 8 }} onPress={() => { router.push('/userauth/signup') }}>
              <Text style={[styles.default, { fontSize: 16, color: '#541675', fontFamily: 'Satoshi-Medium' }]}>Don't have an account? <Text style={{ fontFamily: 'Satoshi-Bold' }}>Sign up</Text></Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </ KeyboardAvoidingView>
  );
}


