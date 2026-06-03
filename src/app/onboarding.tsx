import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../components/Header';
import Button from '../components/Button';

export default function Onboarding() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();

  const isEmailValid = (email: string) => {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const isValid = firstName.length > 0 && isEmailValid(email);

  const handleNext = async () => {
    try {
      const userData = { firstName, email };
      await AsyncStorage.setItem('user', JSON.stringify(userData));
      router.replace('/home');
    } catch (e) {
      console.error("Failed to save user data", e);
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.mainContainer}
    >
      <Header showProfile={false} />

      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        {/* Banner Section - Updated to match image exactly */}
        <View style={styles.banner}>
          <Text style={styles.bannerTxt}>Little Lemon</Text>
          <Text style={styles.bannerSub}>Chicago</Text>
          <Text style={styles.bannerDesc}>
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </Text>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.welcomeText}>Let us get to know you</Text>
          
          <Text style={styles.label}>First Name *</Text>
          <TextInput 
            style={styles.input} 
            value={firstName} 
            onChangeText={setFirstName} 
            placeholder="e.g. Mario"
          />

          <Text style={styles.label}>Email *</Text>
          <TextInput 
            style={styles.input} 
            value={email} 
            onChangeText={setEmail} 
            placeholder="e.g. mario@example.com"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.footer}>
          <Button 
            title="Next" 
            onPress={handleNext} 
            disabled={!isValid} 
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: '#fff' },
  // Updated banner styles: alignment shifted to 'flex-start' (left-aligned)
  banner: { 
    backgroundColor: '#495E57', 
    paddingHorizontal: 20,
    paddingVertical: 30, 
    alignItems: 'flex-start' 
  },
  bannerTxt: { 
    color: '#F4CE14', 
    fontSize: 40, 
    fontFamily: 'MarkaziText',
    fontWeight: 'bold' 
  },
  bannerSub: { 
    color: '#fff', 
    fontSize: 26, 
    fontFamily: 'MarkaziText', 
    marginTop: -5,
    marginBottom: 15
  },
  // Added description styling
  bannerDesc: {
    color: '#EDEFEE',
    fontSize: 16,
    fontFamily: 'Karla',
    lineHeight: 22,
    maxWidth: '80%' // Prevents text from hitting the absolute edge
  },
  formContainer: { flex: 1, padding: 30, backgroundColor: '#EDEFEE' },
  welcomeText: { fontSize: 22, fontFamily: 'Karla-Bold', textAlign: 'center', marginBottom: 40, color: '#495E57' },
  label: { fontSize: 18, fontFamily: 'Karla-Bold', marginBottom: 8, color: '#495E57' },
  input: { 
    backgroundColor: '#fff', 
    padding: 15, 
    borderRadius: 8, 
    marginBottom: 25, 
    borderWidth: 1, 
    borderColor: '#495E57',
    fontFamily: 'Karla',
    fontSize: 16
  },
  footer: { 
    padding: 30, 
    backgroundColor: '#EDEFEE', 
    alignItems: 'flex-end',
    justifyContent: 'center'
  }
});