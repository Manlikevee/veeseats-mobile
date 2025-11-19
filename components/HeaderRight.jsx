// components/HeaderRight.jsx
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Bell } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ThemedView } from './themed-view';

export default function HeaderRight() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];
  const iconColor = colorScheme === 'dark' ? '#fff' : theme.text;

  const notificationCount = 3;

  return (
    <ThemedView style={styles.bg} lightColor="#f5f5f5d7" darkColor="#1c1c1cff">
      <TouchableOpacity style={styles.container}>
        <Bell size={22} color={iconColor} strokeWidth={1.6} />
        {notificationCount > 0 && (
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>{notificationCount}</Text>
          </View>
        )}
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  bg: {
    borderRadius: 25, // round background for the entire touchable area
    padding: 6,
marginBottom:5
  },
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeContainer: {
    position: 'absolute',
    top: -4,
    right: -4,
    minWidth: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#FF3B30',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '600',
  },
});
