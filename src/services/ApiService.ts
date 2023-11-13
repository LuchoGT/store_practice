import { Principal } from "@/interfaces/results/results";
import Service from "./Service";

class RickAndMortyService  extends Service{
 // Método para obtener la lista de personajes
 async getCharacters():Promise<string[]> {
    try {
      const response = await this.http.get('/character');
      const res = response.data.results;
      return res;
    } catch (error) {
      console.error('Error al obtener personajes:', error);
      throw error; // Puedes lanzar el error para que lo maneje el código que llama a esta función
    }
  }

  async getCharactersById(id: string):Promise<Principal> {
    try {
      const response = await this.http.get(`/character/${id}`);
      // const res = response.data.results;
      return response.data as Principal;
      // return res;
    } catch (error) {
      console.error('Error al cargar el personaje:', error);
      throw error;
    }
  }

}

export default RickAndMortyService ;
