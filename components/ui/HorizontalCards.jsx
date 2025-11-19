import { Briefcase, Layers, Users } from 'lucide-react-native';
import React from 'react';
import { Dimensions, FlatList, StyleSheet, View } from 'react-native';
import { ThemedText } from '../themed-text';
import { ThemedView } from '../themed-view';

const { width } = Dimensions.get('window');

const cards = [
  {
    id: '1',
    title: 'Application Draft',
    number: 10,
    icon: <Layers size={30}  strokeWidth={1.6} />,
    bgColor: '#d7333333', // red-ish transparent
    color: '#d73333', // red icon
  },
  {
    id: '2',
    title: 'Saved Roles',
    number: 26,
    icon: <Users size={30}  strokeWidth={1.6} />,
    bgColor: '#bb6bd933', // purple transparent
    color: '#bb6bd9', // purple icon
  },
  {
    id: '3',
    title: 'Role Matches',
    number: 0,
    icon: <Briefcase size={30}  strokeWidth={1.6} />,
    bgColor: '#3498db33', // blue transparent
    color: '#3498db', // blue icon
  },
];

export default function HorizontalCards() {
  return (
    <FlatList
      data={cards}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
  contentContainerStyle={{ paddingRight: 16, marginTop:10, marginBottom:15 }} // <-- remove left padding
      renderItem={({ item }) => (
        <ThemedView style={styles.card} lightBorderColor='#e9e9e9ff' darkBorderColor='#1a1a1a' lightColor='#ffffff' darkColor='#121212' >
          <View style={[styles.iconWrapper, { backgroundColor: item.bgColor }]}>
            {React.cloneElement(item.icon, { color: item.color })}
          </View>
          <View>
  <ThemedText style={styles.number} fontFamily='Poppins_600SemiBold' lightColor='#0d0d0df2' darkColor='#fff'>{item.number}</ThemedText>
          <ThemedText fontFamily='InstrumentSans_400Regular' style={styles.title} lightColor='#2a2a2ae1'>{item.title}</ThemedText>
          </View>
        
        </ThemedView>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    width: width * 0.68,

    marginRight: 16,
    padding: 16,
    borderRadius: 3,
    borderWidth: 0.6,

    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
    paddingBlock: 30,
  },
  iconWrapper: {
    padding: 16,
    borderRadius: 10,
 
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: 25,
    lineHeight: 30,


  },
  title: {
    fontSize: 13,
    lineHeight: 18,
  },
});
