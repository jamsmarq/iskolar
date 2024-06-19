import { Tabs } from 'expo-router';
import { Home, TicketPercent, Bell, CircleUserRound, Menu, Search, SlidersHorizontal, Settings } from 'lucide-react-native';
import React from 'react';
import { Text, StyleSheet, Pressable, Image } from 'react-native';

const styles = StyleSheet.create({
  headerStyle: {
    // fontFamily: "SpaceGrotesk-Regular",
    // height: 80,
  },
  headerTitleStyle: {
    fontSize: 20,
    fontFamily: "Grotesk-Bold",
    letterSpacing: 0.5,
  },
  tabBarStyle: {
    // borderTopWidth: 0,
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
  },
  headerLeftStyle: {
    marginLeft: 20,
  },
  headerRightStyle: {
    marginRight: 20,
  },
  headerRightHomeStyle: {
    backgroundColor: "#7F68FD",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  headingRightDiscoverStyle: {},
  headingRightInboxStyle: {},
  headingRightAccountStyle: {},
})

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#7F68FD',
        tabBarActiveBackgroundColor: '#F9F9F9',
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
        headerTitleAlign: 'center',
        headerLeft: () => (
          <Pressable style={styles.headerLeftStyle}>
            <Menu size={24} strokeWidth={2.5} color="#000000" />
          </Pressable>
        ),
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarIconStyle: styles.tabBarIconStyle,
      })}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          // headerShown: false,
          headerTitle: () => <Image source={require('@/assets/wordmark.png')} />,
          tabBarIcon: ({ color }) => <Home size={24} strokeWidth={2.5} color={color} />,
          headerRight: () => <Pressable style={[styles.headerRightStyle, styles.headerRightHomeStyle]}><Text style={{ fontFamily: "Grotesk-Bold", fontSize: 12, color: '#FFFFFF', letterSpacing: 0.5 }}>HELP</Text></Pressable>,
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          title: 'Discover',
          // headerShown: false,
          tabBarIcon: ({ color }) => <TicketPercent size={24} strokeWidth={2.5} color={color} />,
          headerRight: () => (
            <Pressable style={[styles.headerRightStyle, styles.headingRightDiscoverStyle]}>
              <Search size={24} strokeWidth={2.5} color="#000000" />
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          title: 'Inbox',
          // headerShown: false,
          tabBarIcon: ({ color }) => <Bell size={24} strokeWidth={2.5} color={color} />,
          headerRight: () => (
            <Pressable style={[styles.headerRightStyle, styles.headingRightDiscoverStyle]}>
              <SlidersHorizontal size={24} strokeWidth={2.5} color="#000000" />
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          // headerShown: false,
          tabBarIcon: ({ color }) => <CircleUserRound size={24} strokeWidth={2.5} color={color} />,
          headerRight: () => (
            <Pressable style={[styles.headerRightStyle, styles.headingRightDiscoverStyle]}>
              <Settings size={24} strokeWidth={2.5} color="#000000" />
            </Pressable>
          ),
        }}
      />
    </Tabs>
  );
}
