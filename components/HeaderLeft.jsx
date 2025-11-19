// components/HeaderLeft.jsx
import { Colors } from '@/constants/theme'
import { useColorScheme } from '@/hooks/use-color-scheme'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { ThemedText } from './themed-text'

export default function HeaderLeft({ username = 'Victor' }) {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme ?? 'light']
  const textColor = colorScheme === 'dark' ? '#fff' : theme.text

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.pravatar.cc/150?img=3' }}
        style={styles.profilePhoto}
      />
      <View>
        <ThemedText fontSize={12} style={styles.welcomeText} fontFamily="InstrumentSans_600SemiBold" lightColor='black' darkColor='#ddd' >
          Welcome back,
        </ThemedText>
        <ThemedText
        style={styles.username} fontFamily="InstrumentSans_400Regular" lightColor='#222222ff' darkColor='#f6f8f7'
        >{username}</ThemedText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
      paddingBottom:19
  },
  profilePhoto: {
    width: 35,
    height: 35,
    borderRadius: 17,
    marginRight: 10,
  },
  welcomeText: {
    fontSize: 12,
  
  },
  username: {
    fontSize: 13,
    lineHeight: 17,
  },
})
