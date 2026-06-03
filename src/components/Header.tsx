import { View, Image, StyleSheet, Pressable, Text } from 'react-native';
import { useRouter } from 'expo-router';
import logo from "../../assets/images/logo.jpg"

export default function Header({ showProfile = true, showBack = false }) {
  const router = useRouter();

  const handleBack = () => {
    // Safety check: if there is no history to go back to, send user Home
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/home');
    }
  };

  return (
    <View style={styles.header}>
      {/* Left: Back Button or Spacer */}
      {showBack ? (
        <Pressable onPress={handleBack} style={styles.backBtn}>
          <Text style={styles.backText}>←</Text>
        </Pressable>
      ) : (
        <View style={styles.spacer} />
      )}

      {/* Center: Logo (Clicking it also takes you Home) */}
      <Pressable onPress={() => router.replace('/home')}>
        <Image 
          source={logo} 
          style={styles.logo} 
          resizeMode="contain" 
        />
      </Pressable>

      {/* Right: Clickable Avatar */}
      {showProfile ? (
        <Pressable onPress={() => router.push('/profile')}>
          <View style={styles.avatar}>
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg' }} 
              style={styles.avatarImg} 
            />
          </View>
        </Pressable>
      ) : (
        <View style={styles.spacer} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 20, 
    paddingTop: 40, 
    paddingBottom: 10, 
    backgroundColor: '#fff',
    height: 90, 
  },
  logo: { width: 120, height: 30 },
  spacer: { width: 40 },
  backBtn: { 
    width: 35, 
    height: 35, 
    backgroundColor: '#495E57', 
    borderRadius: 20, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  backText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  avatar: { 
    width: 40, 
    height: 40, 
    borderRadius: 20, 
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#eee'
  },
  avatarImg: { width: '100%', height: '100%' }
});