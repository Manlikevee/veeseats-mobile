import { ThemedText } from '@/components/themed-text'
import { ThemedView } from '@/components/themed-view'
import InputComponent from '@/components/ui/InputComponent'
import RoleCard from '@/components/ui/RoleCard'
import { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

const roles = () => {
  const [search , setSearch] = useState('')

   const roles = [
  {
    logo: 'https://res.cloudinary.com/viktortech/image/upload/v1/media/organizations_images/CompanyAirbnb_kf1qq9',
    location: 'Borno, Nigeria',
    title: 'Tech consultant',
    service: 'Arts/Crafts',
    content: 'Role Overview: We are seeking a passionate and experienced Senior Tech Consultant to join our team and drive digital innovation within the Arts & Crafts industry. You will be responsible for providing strategic guidance, technical expertise, and project leadership...',
    skills: ['Arts/Crafts'],
  },
  {
    logo: 'https://res.cloudinary.com/viktortech/image/upload/v1/media/organizations_images/CompanyAirbnb_kf1qq9',
    location: 'Delta, Nigeria',
    title: 'CEO',
    service: 'Automotive',
    content: 'The CEO is the highest-ranking executive responsible for the overall success and strategic direction of Master, a leading company in the automotive industry. This individual will drive growth, manage all aspects of the business, and ensure its long-term sustainability...',
    skills: ['Automotive'],
  },
  {
    logo: 'https://res.cloudinary.com/viktortech/image/upload/v1/media/organizations_images/CompanyGoogle_pfskro',
    location: 'Benue, Nigeria',
    title: 'Business analyst ',
    service: 'Arts/Crafts',
    content: 'Role Overview: This role will be instrumental in driving strategic growth and operational efficiency within our dynamic arts & crafts business. You will work closely with leadership, product teams, and key stakeholders to analyze market trends...',
    skills: ['Arts/Crafts'],
  },
  {
    logo: 'https://res.cloudinary.com/viktortech/image/upload/v1/media/organizations_images/CompanyGoogle_pfskro',
    location: 'Benue, Nigeria',
    title: 'HR Manager',
    service: 'Construction',
    content: 'Role Overview: This is a highly visible role within the organization, responsible for providing comprehensive HR support to the construction team. You will be a key contributor to the success of our company by ensuring our workforce is engaged, motivated, and supported...',
    skills: ['Construction'],
  },
  {
    logo: 'https://res.cloudinary.com/viktortech/image/upload/v1/media/organizations_images/CompanyAirbnb_kf1qq9',
    location: 'FCT, Nigeria',
    title: 'Facility Manager',
    service: 'Facilities Services',
    content: 'This position is responsible for the overall management and operation of a complex and dynamic facilities portfolio. The incumbent will lead a team of professionals, oversee all aspects of facility maintenance, operations, and services...',
    skills: ['Facilities Services'],
  },
  {
    logo: 'https://res.cloudinary.com/viktortech/image/upload/v1/media/organizations_images/CompanyGoogle_pfskro',
    location: 'Benue, Nigeria',
    title: 'PHP Developer',
    service: 'Information Technology/IT',
    content: 'Understand Renmoney\'s business requirements and how to translate it into application features. Writing high-quality code to program complete applications on schedule. Collaborate with a team of IT professionals to set specifications for new applications...',
    skills: ['Information Technology/IT'],
  },
  {
    logo: 'https://res.cloudinary.com/viktortech/image/upload/v1/media/organizations_images/CompanyAirbnb_kf1qq9',
    location: 'Enugu, Nigeria',
    title: 'Engineering Manager',
    service: 'Tech',
    content: 'PayU, a leading payment and Fintech company in 50+ high-growth markets throughout Asia, Central and Eastern Europe, Latin America, the Middle East and Africa, part of Prosus group, one of the largest technology investors in the world is redefining the way people buy and sell online...',
    skills: ['Tech'],
  },
  {
    logo: 'https://res.cloudinary.com/viktortech/image/upload/v1/media/organizations_images/CompanyAirbnb_kf1qq9',
    location: 'Bauchi, Nigeria',
    title: 'Finance and Risk Manager',
    service: 'Finance',
    content: 'The Finance and Risk Manager will be a member of the Reaching the Last Mile project (RLM) supporting NTDs Elimination Programme Management Office (PMO) and will report to the Director, RLM and Finance Manager...',
    skills: ['Finance'],
  },
  {
    logo: 'https://res.cloudinary.com/viktortech/image/upload/v1/media/organizations_images/CompanyWealthsimple_msojdw',
    location: 'Nigeria',
    title: 'Board Member',
    service: 'Board of Directors',
    content: 'Wealthsimple, a leading fintech company revolutionizing the way people invest and manage their finances, is seeking a highly experienced and accomplished individual to join our Board of Directors. As a Board Member, you will play a pivotal role in guiding the strategic direction...',
    skills: ['Board of Directors', 'Finance'],
  },
  {
    logo: 'https://res.cloudinary.com/viktortech/image/upload/v1/media/organizations_images/CompanyMonday.com_jm0ljz',
    location: 'Nigeria',
    title: 'Board Member',
    service: 'Full-Time',
    content: 'Monday, the leading provider of collaborative work management solutions, is seeking a highly experienced and accomplished individual to join our Board of Directors. This is a unique opportunity to contribute to the strategic direction of a rapidly growing and innovative company...',
    skills: ['Full-Time', 'Board of Directors'],
  },
  {
    logo: 'https://res.cloudinary.com/viktortech/image/upload/v1/media/organizations_images/CompanyToggle_ep0ogm',
    location: 'Nigeria',
    title: 'Board Member',
    service: 'Board of Directors',
    content: 'Toggle, a leading innovator in [insert Toggle\'s industry] is seeking a highly experienced and strategic individual to join our Board of Directors. As a Board Member, you will play a vital role in guiding the company\'s long-term vision, overseeing strategic direction...',
    skills: ['Board of Directors', 'Executive'],
  },
  {
    logo: 'https://res.cloudinary.com/viktortech/image/upload/v1/media/organizations_images/CompanyBrowserStack_kcd1gf',
    location: 'Nigeria',
    title: 'Board Member',
    service: 'Board of Directors',
    content: 'BrowserStack, a leading provider of cloud-based testing infrastructure, is seeking a highly experienced and strategic individual to join our Board of Directors. As a Board Member, you will play a crucial role in guiding the company\'s growth and success...',
    skills: ['Board of Directors', 'Executive'],
  },
];

  return (
        <ThemedView style={styles.container} lightColor='#f6f8f7' darkColor='#0f0f0f'>
                <ScrollView style={{flex:1, padding:12, gap:15, marginTop:5, flexDirection:'column'}}
                contentContainerStyle={{paddingBottom:20, gap:18}}
            showsVerticalScrollIndicator={false}
            >

  <View>

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

export default roles

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})