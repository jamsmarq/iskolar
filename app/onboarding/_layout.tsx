import { Stack, Tabs } from 'expo-router';
import React from 'react';
import { Text, StyleSheet, Pressable, Image } from 'react-native';

const styles = StyleSheet.create({})

export default function OnboardingLayout() {
  return (
    <Stack>
      <Stack.Screen name='screen1' options={{ headerShown: false}} />
      <Stack.Screen name='screen2' options={{ headerShown: false}} />
      <Stack.Screen name='screen3' options={{ headerShown: false}} />
      <Stack.Screen name='screen4' options={{ headerShown: false}} />
    </Stack>
  );
}
