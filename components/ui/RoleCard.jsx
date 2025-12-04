import { MapPin } from 'lucide-react-native';
import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { ThemedText } from '../themed-text';
import { ThemedView } from '../themed-view';


export default function RoleCard({ 
  logo, 
  location, 
  title, 
  service, 
  content, 
  skills = [] 
}) {
  return (
        <ThemedView style={styles.card} lightBorderColor='#e9e9e9ff' darkBorderColor='#1a1a1a' lightColor='#ffffff' darkColor='#121212' >
      {/* Header */}
      <View style={styles.header}>
        <Image source={{ uri: logo }} style={styles.logo} />
        <ThemedView style={styles.locationflex} >
    <View style={styles.location}>
          <MapPin size={14} color="#bd0b20" strokeWidth={1.5} />
          <ThemedText style={styles.locText} fontFamily='InstrumentSans_400Regular'  darkColor='#b1b1b1ff'>{location}</ThemedText>
        </View>

              <View  style={styles.pill}>
            <ThemedText fontSize={12}  lightColor='#a91f2f' fontFamily='InstrumentSans_400Regular' style={styles.pillText}>{service}</ThemedText>
          </View>
        </ThemedView>
    
      </View>

      {/* Title */}
      <View style={styles.titleSection}>
        <ThemedText style={styles.title} lightColor='#1a1a1a' fontFamily='InstrumentSans_700Bold'>{title}</ThemedText>
        <ThemedText  style={styles.service} fontFamily='Nunito_600SemiBold' lightColor='#424243' darkColor='#f7f7f7ff' >{service}</ThemedText>
      </View>

      {/* Content */}
      <ScrollView style={styles.content} nestedScrollEnabled>
        <ThemedText style={styles.contentText} numberOfLines={3} ellipsizeMode="tail" fontFamily='InstrumentSans_400Regular'  darkColor='#b1b1b1ff' lightColor='#3a3f45c7'>
          {content}
        </ThemedText>
      </ScrollView>

      {/* Footer / Pills */}
      <View style={styles.footer}>
        {skills.map((skill, index) => (
          <ThemedView key={index} style={styles.bottompill} lightColor='#f3f3f3' darkColor='#1a1a1aff' borderRadius={4} borderWidth={0.5} lightBorderColor='#e0e0e0ff' darkBorderColor='#2a2a2aff' >
            <ThemedText fontSize={12.5} lightColor='#0c0c0c' fontFamily='InstrumentSans_400Regular' style={styles.pillText}>{skill}</ThemedText>
          </ThemedView>
        ))}
      </View>

       {/* <Bookmark strokeWidth={1.4} size={19} /> */}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    gap: 5,

    padding: 15,
    borderRadius: 3,
    borderWidth: 0.5,

    width: '100%',
    marginBottom: 7,
    marginTop: 7,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 30,
    resizeMode: 'contain',
    borderRadius: 6,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    gap: 4,
  },
  locationflex:{
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 'auto',
    gap: 4,
    backgroundColor:'transparent',
  },
  locText: {
    fontSize: 13,

  },
  titleSection: {
    flexDirection: 'column',
    gap: 1,
  },
  title: {
    fontSize: 14,
    textTransform: 'capitalize',
    lineHeight: 20,

   
  },
  service: {
    fontSize: 13.5,
    
      textTransform: 'capitalize',
  },
  content: {
    marginTop: 3,
  },
  contentText: {
    fontSize: 13.5,
    lineHeight: 20,
   
    textAlign: 'left',
  },
  footer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 8,
    paddingBottom:7
  },
  pill: {
    backgroundColor: '#a91f2f33',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  bottompill:{
    paddingVertical: 4,
    paddingHorizontal: 7,
    borderRadius: 4,
  },
  pillText: {

    
    lineHeight: 13,
  },
});
