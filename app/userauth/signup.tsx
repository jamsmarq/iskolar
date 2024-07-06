import { useConfirmExit } from '@/hooks/useConfirmExit';
import { useFocusEffect, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, Alert, BackHandler, TextInput, KeyboardAvoidingView, ScrollView, Platform, ActivityIndicator, Keyboard } from 'react-native';
import Toast from 'react-native-root-toast';
import { SafeAreaView } from 'react-native-safe-area-context';
import { User, Mail, Lock } from 'lucide-react-native';
import CustomTextInput from '@/components/CustomTextInput';
import { signup } from '@/services/authService';

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

export default function SignupScreen() {
  const [username, setUsername] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [isFormSubmitted, setFormSubmitted] = useState(false)

  const router = useRouter()

  const handleSignup = async () => {
    Keyboard.dismiss()
    setFormSubmitted(true)

    try {
      const response = await signup(username, emailAddress, newPassword)

      if (response) { router.push('/auth/emailOtp') }

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
          <Text style={{ fontFamily: "Grotesk-Bold", fontSize: 32 }}>Create an account</Text>
          <Text style={{ fontFamily: "Satoshi-Regular", fontSize: 16 }}>Please enter your details to continue.</Text>
        </View>
        <View style={{ width: '100%', rowGap: 28 }}>
          <CustomTextInput Icon={User} placeholder='' onChangeText={setUsername} value={username} label='Username' />

          <CustomTextInput Icon={Mail} placeholder='' onChangeText={setEmailAddress} value={emailAddress} label='Email address' />

          <CustomTextInput Icon={Lock} placeholder='' onChangeText={setNewPassword} value={newPassword} label='New password' />

          {/* <View style={{ alignItems: 'flex-start', width: '100%', rowGap: 12, }}>
              <Text style={[styles.default, { fontFamily: "Satoshi-Medium", fontSize: 14 }]}>New password</Text>
              <TextInput style={{ width: '100%', height: 50, borderWidth: 1, borderRadius: 12, borderColor: '#D2D2D2', fontSize: 16, paddingLeft: 16 }} placeholder='*************' textContentType='newPassword' onChangeText={setNewPassword} value={newPassword} secureTextEntry={true} />
            </View> */}

        </View>
        <View style={{ rowGap: 28, marginBottom: 20, width: '100%' }}>
          <View style={{ rowGap: 12 }}>
            <Pressable style={{ backgroundColor: '#7F68FD', alignItems: 'center', paddingVertical: 16, borderRadius: 8 }} onPress={() => { router.push('') }}>
              <Text style={[styles.default, { fontSize: 16, color: 'white', fontWeight: 'bold' }]}>Create my account</Text>
            </Pressable>

            <Pressable style={{ backgroundColor: '#7F68FD', alignItems: 'center', paddingVertical: 16, borderRadius: 8 }} onPress={handleSignup} disabled={isFormSubmitted}>
              {isFormSubmitted
                ? <ActivityIndicator color='white' size='small' />
                : <Text style={[styles.default, { fontSize: 16, color: 'white', fontWeight: 'bold' }]}>Create my account</Text>
              }
            </Pressable>
            <Pressable style={{ alignItems: 'center', paddingVertical: 16, borderRadius: 8 }} onPress={() => { router.push('/userauth/login') }}>
              <Text style={[styles.default, { fontSize: 16, color: '#541675', fontFamily: 'Satoshi-Medium' }]}>Already have an account? <Text style={{ fontFamily: 'Satoshi-Bold' }}>Log in</Text></Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView >
  );
}


