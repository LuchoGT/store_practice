import { Principal } from "@/interfaces/results/results";
import RickAndMortyService from "@/services/ApiService";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const useInfo = () => {
 
    const { id } = useParams();


    const [info, setInfo] = useState<Principal | null>(null);
    const navigate = useNavigate();

    console.log(info);
    
    useEffect(() => {
      if (!id || "") {
        navigate('/');
        return;
    }
        const fetchData = async () => {
          try {
            const rickAndMortyService = new RickAndMortyService();
            const charactersData = await rickAndMortyService.getCharactersById(id);
            setInfo(charactersData);
          } catch (error) {
            console.error('Error al cargar personajes en el componente:', error);
          }
        };
      
        fetchData();
      }, [id,navigate]);
      
    return{
        info
    }
}
