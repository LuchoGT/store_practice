import { useState } from "react";
import './CardStore.scss'
import { IconHeart} from "@tabler/icons-react";
import { Principal } from "@/interfaces/results/results";
import { Link } from "react-router-dom";



export const CardStore = ({image,name,species,id}:Principal) => {

    
  const [isAdded, setIsAdded] = useState(false);

  const opencart = (e) => {
    // Aquí puedes realizar cualquier lógica relacionada con agregar el producto al carrito
    // Por ahora, simplemente mostraremos el mensaje "agregado" y oscureceremos el card.
    setIsAdded(true);
    e.preventDefault();

    // Para ocultar el mensaje después de un cierto tiempo, puedes usar un setTimeout:
    setTimeout(() => {
      setIsAdded(false);
    }, 2000); // El mensaje se ocultará después de 2 segundos (2000 ms)
  };


  return (
    <Link to={`/${id}`}>
      <div className="card">
        <div className="card-container">
          <div className="card-data">
            <img src={image} className="card-data__img" />
            <h3 className="card-data__title">{name}</h3>
            <h1 className="card-data__price">{species}</h1>
          </div>
          <div className="card-button">
            <div className="card-button__wishlist">
              <IconHeart/>
            </div>
            <div onClick={opencart} className="card-button__add">Add cart</div>
          </div>
          {isAdded && (
            <div className="card-msj">
              <p>Agregado</p>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};
