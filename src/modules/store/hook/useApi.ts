import RickAndMortyService from "@/services/ApiService";
import { useEffect, useState } from "react";

export const useApi = () => {
    const [characters, setCharacters] = useState<Array<string>>();
    const [loading, setLoading] = useState<boolean>(true);

      useEffect(() => {
        const fetchData = async () => {
          try {
            const rickAndMortyService = new RickAndMortyService();
            const charactersData = await rickAndMortyService.getCharacters();
            setCharacters(charactersData);
            setLoading(false);
          } catch (error) {
            console.error('Error al cargar personajes en el componente:', error);
            setLoading(false);
          }
        };
      
        fetchData();
      }, []);
      
    return{
        characters,
        loading
    }

}
