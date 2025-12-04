import React, { useState } from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, TouchableOpacity, useColorScheme, View } from 'react-native';

import bigbg from "@/assets/onboard/dot.png";
import mylogo from "@/assets/onboard/veebanklogo.png";
import Inputcomponent from '@/components/reusable/Inputcomponent';
import { Colors } from '@/constants/theme';
import { Link, useRouter } from "expo-router";
// import FooterText from '@/components/reusable/FooterText';
import { ThemedText } from '../themed-text';
import { ThemedView } from '../themed-view';

const Loginform = () => {
    const router = useRouter();
    const colorScheme = useColorScheme()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const redirectToSlider = () => {
      router.push('/(auth)/Onboarding');
    };
    return (
      <ThemedView lightColor='#fff'  style={{flex:1}}>
  
       <ThemedView lightColor='#40196d' darkColor='#40196d' style={{flex:0.25,  width:'100%'}}>
       <ImageBackground source={bigbg} style={{width:'100%', backgroundColor:'transparent', flex:1, padding:20, alignSelf:'flex-end', justifyContent:'flex-end', }} >
      <ThemedView style={{backgroundColor:'transparent', flexDirection:'row', width:'100%',}}>
  
  <View style={{width:'70%'}}>
  <ThemedText style={styles.mylabel} lightColor='#b2b2b2'> Bank at your finger tips</ThemedText>
  <ThemedText style={styles.mysubject} darkColor='#ECEDEE'>Log In To Your Account</ThemedText>
  </View>
  
  <View style={{width:'30%', backgroundColor:'transparent', flexGrow:0,   alignItems:'flex-end', justifyContent:'flex-end',}}>
  <Image 
    source={mylogo} 
    style={{ width: 50, height: 50 }} 
  />
  </View>
      </ThemedView>
  
          
        </ImageBackground>
        </ThemedView> 
  
        <ThemedView style={{ flex:0.75}} darkColor='#000' >
  
        <ScrollView contentContainerStyle={{padding:17,}}>
        <Inputcomponent
          inputState={email}
          setInputState={setEmail}
          label="Email"
          inputType="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          icontype="envelope"
        />
  
  <Inputcomponent
          inputState={password}
          setInputState={setPassword}
          label="Password"
          inputType="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          icontype="lock"
        />
  <Link href={('/(auth)/(resetpassword)')} lightColor='#000000' style={styles.forgotpassword}>Forgot Password</Link>
  <TouchableOpacity style={styles.button} onPressIn={redirectToSlider}>
    <ThemedText style={styles.mylabel} lightColor='white'>Login</ThemedText>
  </TouchableOpacity>
  
  
  
  <Link href={'/(auth)/register'} style={{
    paddingTop: '20%',
    color: Colors[colorScheme ?? 'light'].purplecolor, // Dynamic color assignment
    textAlign: 'center',
    fontFamily:'AeonikRegular'
  }}> <ThemedText>Don’t have an account?</ThemedText>  Create an account</Link>
  
  </ScrollView>
  
  {/* <FooterText/> */}
  </ThemedView>
  
  
  
  
   
  
      </ThemedView>
    )
  }

export default Loginform

const styles = StyleSheet.create({
    mylabel:{
  
      fontSize:14.3,
      lineHeight:23,
  fontFamily:'AeonikRegular'
  
    },
    forgotpassword:{
      textAlign:'right', marginTop:'-6',
      fontSize:13,
      lineHeight:20,
      fontFamily:'AeonikRegular'
    },
    mysubject:{
      fontSize:19,
      paddingBlock:3,
      lineHeight:28,
      color: '#fff',
      fontFamily:'SpaceGroteskBold'
    },
    button: {
      flex: 1,
      height: 50,
      borderRadius: 5,
      backgroundColor: '#62248F',
      justifyContent: 'center',
      alignItems: 'center',
  marginTop:10
    },
    createaccount:{
  
    }
  })