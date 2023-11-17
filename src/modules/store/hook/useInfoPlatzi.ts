import { Platzi } from "@/interfaces/platzi";
import PlatziService from "@/services/ApiService2";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const useInfoPlatzi = () => {
 
    const { id } = useParams();


    const [info, setInfo] = useState<Platzi | null>(null);
    const navigate = useNavigate();

    console.log(info);
    
    useEffect(() => {
      if (!id || "") {
        navigate('/');
        return;
    }
        const fetchData = async () => {
          try {
            const rickAndMortyService = new PlatziService();
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
