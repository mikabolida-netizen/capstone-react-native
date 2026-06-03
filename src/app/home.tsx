import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
// If your components folder is inside src, use '../components/...'
// If your components folder is in the root, use '../../components/...'
import Header from '../components/Header';
import Hero from '../components/Hero';
import Filters from '../components/Filters';
import MenuItem from '../components/MenuItem';

// THIS IS THE DATA VARIABLE THAT WAS MISSING
const MENU_DATA = [
  { id: '1', name: 'Greek Salad', price: '$12.99', description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese.', image: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg', category: 'Starters' },
  { id: '2', name: 'Bruschetta', price: '$7.99', description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic.', image: 'https://images.pexels.com/photos/4963503/pexels-photo-4963503.jpeg', category: 'Starters' },
  { id: '3', name: 'Lemon Dessert', price: '$5.00', description: 'This comes straight from grandmother’s recipe book, every last ingredient.', image: 'https://images.pexels.com/photos/2648932/pexels-photo-2648932.jpeg', category: 'Desserts' },
];

export default function Home() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  // Filter logic
  const filteredData = MENU_DATA.filter(item => {
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchCat = category ? item.category === category : true;
    return matchSearch && matchCat;
  });

  return (
    <View style={styles.container}>
      <Header />
      <Hero value={search} onChangeText={setSearch} />
      <Filters 
        categories={['Starters', 'Mains', 'Desserts', 'Drinks']} 
        selected={category} 
        onChange={(cat) => setCategory(cat === category ? '' : cat)} 
      />
      <FlatList
        data={filteredData} // We use filteredData here
        keyExtractor={item => item.id}
        renderItem={({ item }) => <MenuItem item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' }
});