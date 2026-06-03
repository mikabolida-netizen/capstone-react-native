import { View, Text, Image, StyleSheet } from 'react-native';

export default function MenuItem({ item }) {
  return (
    <View style={styles.item}>
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.desc} numberOfLines={2}>{item.description}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
      <Image source={{ uri: item.image }} style={styles.img} />
    </View>
  );
}

const styles = StyleSheet.create({
  item: { flexDirection: 'row', padding: 20, borderBottomWidth: 1, borderBottomColor: '#eee' },
  name: { fontSize: 18, fontFamily: 'Karla-Bold' },
  desc: { color: '#495E57', marginVertical: 8, fontFamily: 'Karla' },
  price: { fontSize: 18, fontFamily: 'Karla-Bold', color: '#495E57' },
  img: { width: 80, height: 80, borderRadius: 8, marginLeft: 10 }
});