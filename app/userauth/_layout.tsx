import { Stack, Tabs } from 'expo-router';
import React from 'react';
import { Text, StyleSheet, Pressable, Image } from 'react-native';

const styles = StyleSheet.create({})

export default function UserAuthLayout() {
  return (
    <Stack>
      <Stack.Screen name='initial' options={{ headerShown: false}} />
      <Stack.Screen name='signup' options={{ headerShown: false}} />
      <Stack.Screen name='login' options={{ headerShown: false}} />
    </Stack>
  );
}
