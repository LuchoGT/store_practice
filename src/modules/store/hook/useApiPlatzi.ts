import { Platzi } from "@/interfaces/platzi";
import PlatziService from "@/services/ApiService2";
import { useEffect, useState } from "react";

export const useApiPlatzi = () => {
    const [characters, setCharacters] = useState<Platzi[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

      useEffect(() => {
        const fetchData = async () => {
          try {
            const rickAndMortyService = new PlatziService();
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
