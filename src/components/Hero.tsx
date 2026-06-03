import { View, Text, StyleSheet, Image, TextInput } from 'react-native';

export default function Hero({ searchText, onChangeSearch }) {
  return (
    <View style={styles.hero}>
      <Text style={styles.title}>Little Lemon</Text>
      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <Text style={styles.sub}>Chicago</Text>
          <Text style={styles.desc}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</Text>
        </View>
        <Image source={{ uri: 'https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg' }} style={styles.img} />
      </View>
      <TextInput 
        style={styles.search} 
        placeholder="Search for food..." 
        value={searchText}
        onChangeText={onChangeSearch}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  hero: { backgroundColor: '#495E57', padding: 20 },
  title: { color: '#F4CE14', fontSize: 45, fontFamily: 'MarkaziText' },
  sub: { color: '#fff', fontSize: 30, fontFamily: 'MarkaziText', marginTop: -15 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
  desc: { color: '#EDEFEE', fontSize: 16, fontFamily: 'Karla', width: '90%', marginTop: 10 },
  img: { width: 100, height: 100, borderRadius: 15 },
  search: { backgroundColor: '#EDEFEE', padding: 12, borderRadius: 8, fontFamily: 'Karla' }
});