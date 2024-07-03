import { useConfirmExit } from '@/hooks/useConfirmExit';
import { useFocusEffect, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, Alert, BackHandler, TextInput, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import Toast from 'react-native-root-toast';
import { SafeAreaView } from 'react-native-safe-area-context';
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

  const router = useRouter()

  const handleLogin = async () => {
    try {
      const response = await login(logincred, password)
      Alert.alert('Login successful', response.access_token)
    } catch (error: any) {
      Alert.alert('Login failed', error.message)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0} enabled>
        <ScrollView contentContainerStyle={{ rowGap: 32 }} showsVerticalScrollIndicator={false}>
          <View style={styles.logoImageView}>
            <Image source={require('@/assets/wordmark.png')} />
          </View>
          <View style={{ rowGap: 4, alignItems: 'center' }}>
            <Text style={{ fontFamily: "Grotesk-Bold", fontSize: 32 }}>Welcome Back!</Text>
            <Text style={{ fontFamily: "Satoshi-Regular", fontSize: 16 }}>Please enter your details to continue.</Text>
          </View>
          <View style={{ width: '100%', rowGap: 28 }}>
            <CustomTextInput Icon={User} placeholder='Type your username' inputMode='text' textContentType='username' onChangeText={setUsername} value={logincred} label='Username' />

            <CustomTextInput Icon={Lock} placeholder='*************' inputMode='password' textContentType='password' onChangeText={setPassword} value={password} label='New password' />
          </View>
          <View style={{ rowGap: 28, marginBottom: 20, width: '100%' }}>
            <View style={{ rowGap: 12 }}>
              <Pressable style={{ backgroundColor: '#7F68FD', alignItems: 'center', paddingVertical: 16, borderRadius: 8 }} onPress={handleLogin}>
                <Text style={[styles.default, { fontSize: 16, color: 'white', fontWeight: 'bold' }]}>Login to my account</Text>
              </Pressable>
              <Pressable style={{ alignItems: 'center', paddingVertical: 16, borderRadius: 8 }} onPress={() => { router.push('/userauth/signup') }}>
                <Text style={[styles.default, { fontSize: 16, color: '#541675', fontFamily: 'Satoshi-Medium' }]}>Don't have an account? <Text style={{ fontFamily: 'Satoshi-Bold' }}>Sign up</Text></Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView >
  );
}


