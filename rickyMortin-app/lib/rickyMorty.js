export async function getPersonajes(){
    const CHARACTERS= 'https://rickandmortyapi.com/api/character';

    const rawData = await fetch(`${CHARACTERS}`);
    const json = await rawData.json();
    const {results}=json;

    return results.map((item)=> {
        const {id,name,status,species,gender,episode,image}= item;
        return {
            id,name,status,species,gender,episode,image
        };
    });
}