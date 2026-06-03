import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Pressable, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import Header from '../components/Header';

export default function Profile() {
  const router = useRouter();
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    orderStatuses: true,
    passwordChanges: true,
    specialOffers: true,
    newsletter: true,
  });

  useEffect(() => {
    (async () => {
      const data = await AsyncStorage.getItem('user');
      if (data) {
        const parsed = JSON.parse(data);
        setProfile(prev => ({ ...prev, ...parsed }));
      }
    })();
  }, []);

  const saveChanges = async () => {
    await AsyncStorage.setItem('user', JSON.stringify(profile));
    alert("Changes saved successfully!");
  };

  const logout = async () => {
    await AsyncStorage.clear();
    router.replace('/onboarding');
  };

  const CheckItem = ({ label, value, onPress }) => (
    <Pressable style={styles.checkRow} onPress={onPress}>
      <View style={[styles.checkbox, value && styles.checkboxSelected]}>
        {value && <Text style={styles.checkMark}>✓</Text>}
      </View>
      <Text style={styles.checkLabel}>{label}</Text>
    </Pressable>
  );

  return (
    <View style={styles.main}>
      <Header showBack={true} />
      <ScrollView style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Personal information</Text>
          
          <Text style={styles.labelSmall}>Avatar</Text>
          <View style={styles.avatarRow}>
            <Image source={{ uri: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg' }} style={styles.bigAvatar} />
            <Pressable style={styles.btnGreen}><Text style={styles.btnTextWhite}>Change</Text></Pressable>
            <Pressable style={styles.btnOutline}><Text style={styles.btnTextGray}>Remove</Text></Pressable>
          </View>

          <Text style={styles.label}>First name</Text>
          <TextInput 
            style={styles.input} 
            value={profile.firstName || ''} 
            onChangeText={(t) => setProfile({...profile, firstName: t})} 
          />

          <Text style={styles.label}>Last name</Text>
          <TextInput 
            style={styles.input} 
            value={profile.lastName || ''} 
            onChangeText={(t) => setProfile({...profile, lastName: t})} 
          />

          <Text style={styles.label}>Email</Text>
          <TextInput 
            style={styles.input} 
            value={profile.email || ''} 
            onChangeText={(t) => setProfile({...profile, email: t})} 
            keyboardType="email-address"
          />

          <Text style={styles.label}>Phone number</Text>
          <TextInput 
            style={styles.input} 
            value={profile.phoneNumber || ''} 
            placeholder="(217) 555-0113" 
            onChangeText={(t) => setProfile({...profile, phoneNumber: t})} 
          />

          <Text style={styles.titleSection}>Email notifications</Text>
          <CheckItem label="Order statuses" value={profile.orderStatuses} onPress={() => setProfile({...profile, orderStatuses: !profile.orderStatuses})} />
          <CheckItem label="Password changes" value={profile.passwordChanges} onPress={() => setProfile({...profile, passwordChanges: !profile.passwordChanges})} />
          <CheckItem label="Special offers" value={profile.specialOffers} onPress={() => setProfile({...profile, specialOffers: !profile.specialOffers})} />
          <CheckItem label="Newsletter" value={profile.newsletter} onPress={() => setProfile({...profile, newsletter: !profile.newsletter})} />

          <Pressable style={styles.logoutBtn} onPress={logout}>
            <Text style={styles.logoutText}>Log out</Text>
          </Pressable>

          <View style={styles.actionRow}>
            <Pressable style={styles.btnOutlineWide} onPress={() => router.replace('/home')}>
              <Text style={styles.btnTextGray}>Discard changes</Text>
            </Pressable>
            <Pressable style={styles.btnGreenWide} onPress={saveChanges}>
              <Text style={styles.btnTextWhite}>Save changes</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1, backgroundColor: '#fff' },
  card: { margin: 10, padding: 15, borderWidth: 1, borderColor: '#ddd', borderRadius: 15 },
  title: { fontSize: 20, fontFamily: 'Karla-Bold', marginBottom: 20 },
  labelSmall: { fontSize: 12, color: '#888', marginBottom: 10, fontFamily: 'Karla-Bold' },
  avatarRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 25 },
  bigAvatar: { width: 80, height: 80, borderRadius: 40, marginRight: 20 },
  btnGreen: { backgroundColor: '#495E57', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 8, marginRight: 15 },
  btnOutline: { borderWidth: 1, borderColor: '#495E57', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 8 },
  btnTextWhite: { color: '#fff', fontFamily: 'Karla-Bold' },
  btnTextGray: { color: '#495E57', fontFamily: 'Karla-Bold' },
  label: { fontSize: 14, fontFamily: 'Karla-Bold', color: '#495E57', marginBottom: 5 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginBottom: 20, fontFamily: 'Karla' },
  titleSection: { fontSize: 18, fontFamily: 'Karla-Bold', marginTop: 10, marginBottom: 15 },
  checkRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  checkbox: { width: 22, height: 22, borderWidth: 2, borderColor: '#495E57', borderRadius: 5, marginRight: 10, justifyContent: 'center', alignItems: 'center' },
  checkboxSelected: { backgroundColor: '#495E57' },
  checkMark: { color: '#fff', fontSize: 14, fontWeight: 'bold' },
  checkLabel: { fontFamily: 'Karla', color: '#495E57' },
  logoutBtn: { backgroundColor: '#F4CE14', padding: 15, borderRadius: 10, marginTop: 30, alignItems: 'center', borderWidth: 1, borderColor: '#d4b312' },
  logoutText: { fontFamily: 'Karla-Bold', color: '#333' },
  actionRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, marginBottom: 20 },
  btnOutlineWide: { flex: 0.48, borderWidth: 1, borderColor: '#495E57', padding: 15, borderRadius: 10, alignItems: 'center' },
  btnGreenWide: { flex: 0.48, backgroundColor: '#495E57', padding: 15, borderRadius: 10, alignItems: 'center' },
});