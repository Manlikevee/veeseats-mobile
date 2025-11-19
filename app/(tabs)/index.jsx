import { ThemedText } from '@/components/themed-text'
import { ThemedView } from '@/components/themed-view'
import HorizontalCards from '@/components/ui/HorizontalCards'
import InputComponent from '@/components/ui/InputComponent'
import NotificationHeader from '@/components/ui/NotificationHeader'
import RoleCard from '@/components/ui/RoleCard'
import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

const index = () => {
  const [search , setSearch] = React.useState('')

    const roles = [
    {
      logo: 'https://res.cloudinary.com/viktortech/image/upload/v1/media/organizations_images/CompanyAirbnb_kf1qq9',
      location: 'Abuja, Nigeria',
      title: 'Containerization Specialist using',
      service: 'Aviation/Aerospace',
      content: `We are seeking a highly skilled and experienced Container Specialist to join our team...`,
      skills: ['Aviation/Aerospace', 'Task management'],
    },
    {
      logo: 'https://res.cloudinary.com/viktortech/image/upload/v1/media/organizations_images/CompanyFramer_nprmsy',
      location: 'Lagos, Nigeria',
      title: 'Frontend Developer',
      service: 'Tech/Software',
      content: `We are looking for a frontend developer with experience in React and React Native...`,
      skills: ['React', 'JavaScript', 'UI/UX'],
    },
    // add more roles here
  ];



  return (
    <ThemedView style={styles.container} lightColor='#f6f8f7' darkColor='#0f0f0f'>
            <ScrollView style={{flex:1, padding:12, gap:15, marginTop:5, flexDirection:'column'}}
            contentContainerStyle={{paddingBottom:20, gap:18}}
        showsVerticalScrollIndicator={false}
        >
  <NotificationHeader text='Dear User, Your free trial is ending soon!' />

          <ThemedView style={{gap:3, backgroundColor:'transparent'}}>

<ThemedText fontFamily="Nunito_700Bold" style={styles.sectiontitle}>
 Welcome back, Victor Odah
</ThemedText>
<ThemedText fontFamily="Nunito_400Regular" lightColor='#161616' darkColor='#ccc' style={{fontSize:13, lineHeight:20, textTransform:'capitalize'}}>
  Here is what is happening with your account today.
  </ThemedText>
          </ThemedView>

<View>
  <HorizontalCards/>
<ThemedText style={styles.sectionlabel} fontSize={13} fontFamily="InstrumentSans_400Regular" lightColor='black' darkColor='white'>Role Match</ThemedText>
<InputComponent setInputState={setSearch} inputState={search} placeholder='Search for a role' icontype='magnifier' isfilter />


      {roles.map((role, index) => (
        <RoleCard
          key={index}
          logo={role.logo}
          location={role.location}
          title={role.title}
          service={role.service}
          content={role.content}
          skills={role.skills}
        />
      ))}
</View>


          </ScrollView>
    </ThemedView>
  )
}

export default index

const styles = StyleSheet.create({
  container: { flex: 1,
    
  },
  sectiontitle:{
    fontSize:14,
 marginTop:3,
    textTransform:'uppercase',
  },
    sectionlabel:{

    paddingTop:9,
    paddingBottom:7,

  },
})