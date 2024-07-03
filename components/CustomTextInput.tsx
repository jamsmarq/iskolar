import React from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import { Eye, EyeOff } from "lucide-react-native"

interface CustomInputProps {
  Icon: any,
  placeholder: string,
  onChangeText: any,
  value: string,
  label: string,
  isPassword?: boolean,
}

const styles = StyleSheet.create({
  default: {
    fontFamily: "Satoshi-Regular",
    letterSpacing: 0.5,
  },
  container: {
    alignItems: 'flex-start',
    rowGap: 12,
  }
});

const CustomTextInput: React.FC<CustomInputProps> = ({ Icon, placeholder, onChangeText, value, label, isPassword = false }) => {
  const [secureTextEntry, setSecureTextEntry] = React.useState(false)

  React.useEffect(() => {
    if (isPassword) {
      setSecureTextEntry(true)
    }
  }, [])

  const toggleSecureTextEntry = () => {
    console.log("This is called")
    setSecureTextEntry(!secureTextEntry)
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.default, { fontFamily: "Satoshi-Medium", fontSize: 14 }]}>{label}</Text>
      <View style={{ width: '100%', height: 50, borderWidth: 1.5, borderRadius: 12, alignItems: 'center', borderColor: '#D2D2D2', paddingHorizontal: 16, flexDirection: 'row', columnGap: 12, overflow: 'hidden', }}>
        <Icon size={24} strokeWidth={2.5} color="#797979" />
        <TextInput style={{ width: '100%', fontSize: 16, marginRight: 16 }}secureTextEntry={secureTextEntry} placeholder={placeholder} onChangeText={onChangeText} value={value}  />
        {isPassword &&
          <Pressable style={{ position: 'absolute', right: 16, }} onPress={toggleSecureTextEntry}>
            {secureTextEntry ?
              <Eye size={24} strokeWidth={2.5} color="#797979" /> : <EyeOff size={24} strokeWidth={2.5} color="#797979" />
            }
          </Pressable>
        }
      </View>
    </View>
  )
}

export default CustomTextInput