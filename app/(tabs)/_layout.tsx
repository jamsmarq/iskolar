import { Tabs } from 'expo-router';
import { Home, TicketPercent, Bell, CircleUserRound } from 'lucide-react-native';
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({})

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#7F68FD',
        tabBarActiveBackgroundColor: '#F9F9F9',
        // tabBarInactiveTintColor: '#1e1e1e',
        // tabBarLabel: ({ focused, color }) => {
        //   <Text style={{
        //     color,
        //     fontSize: 12,
        //     fontWeight: 'bold',
        //     letterSpacing: 0.5,
        //     marginTop: -5,
        //     marginBottom: 13
        //   }}>
        //     {route.name}
        //   </Text>
        // },
        tabBarStyle: {
          borderTopWidth: 0,
          height: 70,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
          letterSpacing: 0.5,
          marginTop: -5,
          marginBottom: 13,
        },
        tabBarIconStyle: {
          marginBottom: -8,
        }
      })}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          // headerShown: false,
          tabBarIcon: ({ color }) => <Home size={24} strokeWidth={2.5} color={color} />,
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          title: 'Discover',
          // headerShown: false,
          tabBarIcon: ({ color }) => <TicketPercent size={24} strokeWidth={2.5} color={color} />,
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          title: 'Inbox',
          // headerShown: false,
          tabBarIcon: ({ color }) => <Bell size={24} strokeWidth={2.5} color={color} />,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          // headerShown: false,
          tabBarIcon: ({ color }) => <CircleUserRound size={24} strokeWidth={2.5} color={color} />,
        }}
      />
    </Tabs>
  );
}
