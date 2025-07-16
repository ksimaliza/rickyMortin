import { StyleSheet, Text, View, Image } from 'react-native';

export function CharacterCard({ character }) {
  return (
    <View key={character.id} style={styles.card}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text style={styles.name} numberOfLines={1}>{character.name}</Text>
      <Text style={styles.info} numberOfLines={1}>Status: {character.status}</Text>
      <Text style={styles.info} numberOfLines={1}>Species: {character.species}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#141414',   
    borderRadius: 8,               
    padding: 10,
    marginBottom: 15,
    alignItems: 'center',
    width: 160,                  
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 6,
  },
  image: {
    width: 160,
    height: 200,                  
    borderRadius: 6,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 4,
  },
  info: {
    fontSize: 13,
    color: '#bbb',
  },
});
