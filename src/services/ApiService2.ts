import { Platzi } from "@/interfaces/platzi";
import Service2 from "./Service2";

class PlatziService extends Service2{
 // Método para obtener la lista de personajes
 async getCharacters():Promise<Platzi[]> {
    try {
      const response = await this.http.get('/products');
      const res = response.data;
      return res;
    } catch (error) {
      console.error('Error al obtener personajes:', error);
      throw error; // Puedes lanzar el error para que lo maneje el código que llama a esta función
    }
  }

  async getCharactersById(id: string):Promise<Platzi> {
    try {
      const response = await this.http.get(`/products/${id}`);
      // const res = response.data.results;
      return response.data as Platzi;
      // return res;
    } catch (error) {
      console.error('Error al cargar el personaje:', error);
      throw error;
    }
  }

}

export default PlatziService ;
