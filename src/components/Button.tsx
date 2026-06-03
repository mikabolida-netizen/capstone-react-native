import { Pressable, Text, StyleSheet } from 'react-native';

export default function Button({ title, onPress, disabled, color = '#495E57' }) {
  return (
    <Pressable 
      onPress={onPress} 
      disabled={disabled} 
      style={[styles.btn, { backgroundColor: color }, disabled && styles.disabled]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: { paddingHorizontal: 30, paddingVertical: 12, borderRadius: 10, alignItems: 'center' },
  disabled: { backgroundColor: '#bdc3c7' },
  text: { color: '#fff', fontSize: 18, fontFamily: 'Karla-Bold' }
});