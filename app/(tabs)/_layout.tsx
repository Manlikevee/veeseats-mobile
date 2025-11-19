import { HapticTab } from '@/components/haptic-tab';
import HeaderLeft from '@/components/HeaderLeft';
import HeaderRight from '@/components/HeaderRight';
import GoBack from '@/components/ui/GoBack';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';

// Lucide Icons
import { Octicons } from '@expo/vector-icons';
import {
  BriefcaseBusiness,
  Home as LayoutDashboard,
  NotebookPen,
  SearchCheck,
  User
} from 'lucide-react-native';

export default function TabLayout() {
const colorScheme = useColorScheme();
const theme = Colors[colorScheme ?? 'light'];
const iconColor = colorScheme === 'dark' ? '#fff' : theme.text;

return (
<Tabs
backBehavior="order"
screenOptions={{
headerShown: true,
headerStyle: {
borderBottomColor: theme.cardborderColor,
borderBottomWidth: 0.2,
elevation: 0,
shadowOpacity: 0,
// backgroundColor: theme.headerbg,
},
tabBarButton: HapticTab,
tabBarActiveTintColor: theme.greenbtn,
tabBarInactiveTintColor: iconColor,
tabBarStyle: {
height: 72,
paddingTop: 4,
paddingBottom: 8,
elevation: 0,
shadowOpacity: 0,
borderTopWidth: 0.6,
borderTopColor: theme.cardborderColor,
},
tabBarLabelStyle: styles.tabLabel,
}}
>


  {/* 🏠 Dashboard */}
  <Tabs.Screen
    name="index"
    options={{
      headerTitle: '',
      headerLeft: () => <HeaderLeft username="Victor" />,
      headerRight: () => <HeaderRight />,
      tabBarLabel: ({ focused }) =>
        focused ? (
          <Octicons name="dot-fill" size={13} color={theme.greenbtn} />
        ) : null,
      tabBarIcon: ({ focused }) => (
        <LayoutDashboard
          size={24}
          color={ iconColor}
          strokeWidth={1.6}
        />
      ),
    }}
  />

  {/* 📋 Applications */}
  <Tabs.Screen
    name="applications"
    options={{
      headerTitle: 'Applications',
      headerLeft: () => <GoBack />,
      headerRight: () => <HeaderRight />,
      tabBarLabel: ({ focused }) =>
        focused ? (
            
          <Octicons name="dot-fill" size={13} color={theme.greenbtn} />
        ) : null,
      tabBarIcon: ({ focused }) => (
        <SearchCheck
          size={24}
          color={ iconColor}
          strokeWidth={1.6}
        />
      ),
    }}
  />

  {/* 🔎 Find a Role */}
  <Tabs.Screen
    name="roles"
    options={{
      headerTitle: 'Find a Role',
      headerLeft: () => <GoBack />,
      headerRight: () => <HeaderRight />,
      tabBarLabel: ({ focused }) =>
        focused ? (
          <Octicons name="dot-fill" size={13} color={theme.greenbtn} />
        ) : null,
      tabBarIcon: ({ focused }) => (
        <BriefcaseBusiness
          size={24}
          color={ iconColor}
          strokeWidth={1.6}
        />
      ),
    }}
  />

  {/* 🧩 Services */}
  <Tabs.Screen
    name="services"
    options={{
      headerTitle: 'Services',
      headerLeft: () => <GoBack />,
      headerRight: () => <HeaderRight />,
      tabBarLabel: ({ focused }) =>
        focused ? (
          <Octicons name="dot-fill" size={13} color={theme.greenbtn} />
        ) : null,
      tabBarIcon: ({ focused }) => (
        <NotebookPen
          size={24}
          color={ iconColor}
          strokeWidth={1.6}
        />
      ),
    }}
  />

  {/* 👤 Profile */}
  <Tabs.Screen
    name="profile"
    options={{
      headerTitle: 'Profile',
      headerLeft: () => <GoBack />,
      headerRight: () => <HeaderRight />,
      tabBarLabel: ({ focused }) =>
        focused ? (
          <Octicons name="dot-fill" size={13} color={theme.greenbtn} />
        ) : null,
      tabBarIcon: ({ focused }) => (
        <User
          size={24}
          color={ iconColor}
          strokeWidth={1.6}
        />
      ),
    }}
  />

</Tabs>


);
}

const styles = StyleSheet.create({
tabLabel: {
fontSize: 12,
},
});
