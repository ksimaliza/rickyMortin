import { useEffect, useState } from "react";
import { getPersonajes } from "../lib/rickyMorty";
import { CharacterCard } from "./CharacterCard";
import { StyleSheet, ScrollView, Text, ActivityIndicator, FlatList } from "react-native";

export function Main() {
    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
        getPersonajes().then((data) => {
            setPersonajes(data);
            console.log("personajes", data);
        });
    }, []);

    return (
        <>
            {personajes.length === 0 ? (
                <ActivityIndicator size={"large"} />
            ) : (
                <FlatList data={personajes} keyExtractor={(item) => item.id.toString()} renderItem={({ item, index }) => (
                    <CharacterCard character={item} index={index} />
                )}>

                </FlatList>
            )
            }
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#403e3e',
        paddingVertical: 30,
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    header: {
        color: '#008cff',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    card: {
        backgroundColor: '#787777',
        borderRadius: 12,
        padding: 20,
        marginBottom: 20,
        alignItems: 'center',
        width: '90%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 6,
        elevation: 8,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 15,
        borderWidth: 2,
        borderColor: '#008cff',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 5,
    },
    info: {
        fontSize: 14,
        color: '#aaa',
    },
    logo: {
        backgroundColor: '#333',
        padding: 10,
        borderWidth: 2,
        borderRadius: 75,
        marginBottom: 15,
        borderColor: '#008cff',
    }
});
