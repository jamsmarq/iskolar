import { useConfirmExit } from '@/hooks/useConfirmExit';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();   
  useConfirmExit()

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{ fontFamily: "Grotesk-Bold", fontSize: 35}}>HOME</Text>
      <Button title="ONBOARDING" onPress={() => {router.push('/onboarding/screen1')}} />
      {/* <Text style={{ fontFamily: "Satoshi-Regular", fontWeight: '200',}}>Open up App.js to start working on your app!</Text> */}
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

