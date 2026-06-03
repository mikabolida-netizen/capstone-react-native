import { ScrollView, Pressable, Text, StyleSheet, View } from 'react-native';

export default function Filters({ categories, selected, onChange }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>ORDER FOR DELIVERY!</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((cat) => (
          <Pressable 
            key={cat} 
            onPress={() => onChange(cat)}
            style={[styles.chip, selected === cat && styles.selectedChip]}
          >
            <Text style={[styles.text, selected === cat && styles.selectedText]}>{cat}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, borderBottomWidth: 1, borderBottomColor: '#eee' },
  label: { fontFamily: 'Karla-Bold', fontSize: 18, marginBottom: 10 },
  chip: { backgroundColor: '#EDEFEE', paddingHorizontal: 15, paddingVertical: 8, borderRadius: 15, marginRight: 15 },
  selectedChip: { backgroundColor: '#495E57' },
  text: { color: '#495E57', fontFamily: 'Karla-Bold' },
  selectedText: { color: '#fff' }
});