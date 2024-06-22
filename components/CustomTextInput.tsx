import * as React from "react"
import { StyleSheet, Text, TextInput, View } from "react-native"

interface CustomInputProps {
  Icon: any,
  placeholder: string,
  inputMode: string,
  textContentType: string,
  onChangeText: any,
  value: string,
  label: string,
  secureTextEntry?: boolean,
}

const styles = StyleSheet.create({
  default: {
    fontFamily: "Satoshi-Regular",
    letterSpacing: 0.5,
  },
});

const CustomTextInput: React.FC<CustomInputProps> = ({ Icon, placeholder, inputMode, textContentType, onChangeText, value, secureTextEntry, label }) => {

  return (
    <View style={{ alignItems: 'flex-start', width: '100%', rowGap: 12, }}>
      <Text style={[styles.default, { fontFamily: "Satoshi-Medium", fontSize: 14 }]}>{label}</Text>
      <View style={{ width: '100%', height: 50, borderWidth: 1.5, borderRadius: 12, alignItems: 'center', borderColor: '#D2D2D2', paddingHorizontal: 16, flexDirection: 'row', columnGap: 12, overflow: 'hidden' }}>
        <Icon size={24} strokeWidth={2.5} color="#797979" />
        <TextInput style={{ width: '100%', fontSize: 16, marginRight: 16 }} inputMode={inputMode} placeholder={placeholder} textContentType={textContentType} onChangeText={onChangeText} value={value} secureTextEntry />
      </View>
    </View>
  )
}

export default CustomTextInput