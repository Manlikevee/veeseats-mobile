import { Colors } from "@/constants/theme";
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity, useColorScheme, View } from 'react-native';
import { ThemedText } from "../themed-text";
import { ThemedView } from "../themed-view";

const InputComponent = ({
  inputState,
  setInputState,
  label,
  inputType = 'text', // text, password, email, number, phone, etc.
  placeholder,
  icontype,
  readonly = false,
  image,
  istextarea = false,
  isdropdown = false,
  keyboardType,
  textContentType,
  autoComplete,
  dataDetectorTypes,
  maxLength = 20, // default max length
  isfilter = false,
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const colorScheme = useColorScheme();
  const isPassword = inputType === 'password';

  const handlePasswordToggle = () => setPasswordVisible(prev => !prev);

  const getKeyboardType = () => {
    if (keyboardType) return keyboardType;
    if (inputType === 'email') return 'email-address';
    if (inputType === 'number') return 'numeric';
    if (inputType === 'phone') return 'phone-pad';
    return 'default';
  };

  return (
    <View style={styles.container}>
      {label && <ThemedText fontFamily='Lexend_400Regular' fontSize={13.5} style={styles.label} lightColor="#434343">{label}</ThemedText>}

      <ThemedView
        lightColor="#fff"    
        darkColor="#141414ff"
        borderWidth={1}
        lightBorderColor={isFocused ? "#bd0b20" : "#EDF1F3"}
        darkBorderColor={isFocused ? "#bd0b20a3" : "#141414ff"}
        style={[styles.inputWrapper, readonly && styles.readOnly]}
        borderRadius={3}
      >
        {icontype && !image && (
          <SimpleLineIcons name={icontype} size={18} color="#888" style={styles.icon} />
        )}

        {image && <Image source={image} style={styles.image} />}

        <TextInput
          style={[
            styles.input,
            readonly && styles.readOnly,
            { color: Colors[colorScheme ?? 'light'].text, height: istextarea ? 100 : undefined },
          ]}
          value={inputState}
          onChangeText={setInputState}
          placeholder={placeholder || label}
          placeholderTextColor="#888"
          secureTextEntry={isPassword && !isPasswordVisible}
          editable={!readonly}
          multiline={istextarea}
          numberOfLines={istextarea ? 5 : 1}
          textAlignVertical={istextarea ? 'top' : 'center'}
          keyboardType={getKeyboardType()}
          textContentType={textContentType}
          autoComplete={autoComplete}
          dataDetectorTypes={dataDetectorTypes}
          maxLength={maxLength}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        {isPassword && (
          <TouchableOpacity onPress={handlePasswordToggle} style={styles.iconButton}>
            <Ionicons name={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'} size={20} color="#888" />
          </TouchableOpacity>
        )}

        {isdropdown && (
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="chevron-down-outline" size={20} color="#888" />
          </TouchableOpacity>
        )}

        {isfilter && (
          <TouchableOpacity style={{backgroundColor:'#fdecea', padding:6, borderRadius:4, marginLeft:10 }}>
            <Ionicons name="options-outline" size={20} color="#bd0b20" />
          </TouchableOpacity>
        )}
      </ThemedView>
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  container: {
    marginBottom: 6,
    minHeight: 70,
  },
  label: {
    marginBottom: 4,
    lineHeight: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 4,
  },
  icon: {
    marginRight: 10,
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    minHeight: 47,
    fontSize: 13.5,
    fontFamily: 'Lexend_400Regular',
    borderRadius: 2,
    backgroundColor: 'transparent',
  },
  iconButton: {
    marginLeft: 10,
  },
  readOnly: {
    opacity: 0.6,
  },
});
