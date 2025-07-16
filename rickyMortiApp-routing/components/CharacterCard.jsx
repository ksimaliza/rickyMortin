import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { router } from 'expo-router';

export function CharacterCard({ character }) {
    const getEpisodeId = (episodeUrl) => {
        const parts = episodeUrl.split('/');
        return parts[parts.length - 1];
    };

    const handleImagePress = () => {
        if (character.episode && character.episode.length > 0) {
            const firstEpisodeUrl = character.episode[0];
            const episodeId = getEpisodeId(firstEpisodeUrl);
            router.push(`/${episodeId}`);
        }
    };

    return(
       <View style={styles.card} key={character.id}>
                 <TouchableOpacity onPress={handleImagePress}>
                     <Image style={styles.image} source={{ uri: character.image}} />
                 </TouchableOpacity>
                 <Text style={styles.title}>{character.name}</Text>
                 <Text style={styles.gender}>{character.gender}</Text>
                 <Text style={styles.species}>{character.species} | {character.status}</Text>
                 <Text style={styles.episodeHint}>Toca la imagen para ver el primer episodio</Text>
               </View> 
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 140,
    borderRadius: 10,
  },
 card: {
    flex: 1,
    margin: 8,
    backgroundColor: '#080808ff',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff'
  },
  species: {
    fontSize:16,
    color: '#fff'
  },
  status: {
    fontSize: 16,
    color: '#33caff'
  },
  gender: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold'
  },
  episodeHint: {
    fontSize: 12,
    color: '#ccc',
    fontStyle: 'italic',
    marginTop: 8,
    textAlign: 'center',
  },
  logo: {
    backgroundColor: '#9bacba',
    padding: 20
  }
});