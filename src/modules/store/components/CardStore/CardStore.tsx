import { useState } from "react";
import './CardStore.scss'
import { IconHeart, IconHeartFilled} from "@tabler/icons-react";
import { Principal } from "@/interfaces/results/results";
import { Link, useNavigate } from "react-router-dom";
import { Platzi } from "@/interfaces/platzi";
import { useCart } from "../../hook/useCart";


// interface props{
//   data: Platzi
// }
// export const CardStore = ({image,name,species,id}:Principal) => {

    
//   const [isAdded, setIsAdded] = useState(false);

//   const opencart = (e) => {
//     // Aquí puedes realizar cualquier lógica relacionada con agregar el producto al carrito
//     // Por ahora, simplemente mostraremos el mensaje "agregado" y oscureceremos el card.
//     setIsAdded(true);
//     e.preventDefault();

//     // Para ocultar el mensaje después de un cierto tiempo, puedes usar un setTimeout:
//     setTimeout(() => {
//       setIsAdded(false);
//     }, 2000); // El mensaje se ocultará después de 2 segundos (2000 ms)
//   };


//   return (
//     <Link to={`/${id}`}>
//       <div className="card">
//         <div className="card-container">
//           <div className="card-data">
//             <img src={image} className="card-data__img" />
//             <h3 className="card-data__title">{name}</h3>
//             <h1 className="card-data__price">{species}</h1>
//           </div>
//           <div className="card-button">
//             <div className="card-button__wishlist">
//               <IconHeart/>
//             </div>
//             <div onClick={opencart} className="card-button__add">Add cart</div>
//           </div>
//           {isAdded && (
//             <div className="card-msj">
//               <p>Agregado</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </Link>
//   );
// };
export const CardStore = ({id,images,price,title}:Platzi) => {

    
  const {addToCart,getItemQuantity} = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const quantity = getItemQuantity(id);


  const opencart = (e:React.MouseEvent) => {

    setIsAdded(true);
    e.preventDefault();

    setTimeout(() => {
      // setIsAdded(false);
      window.location.reload()
    }, 2000); 

    addToCart(id)
  
  };


  const navigate = useNavigate();


 
  return (
      <div className="card">
        <div className="card-container">
          <div className="card-data">
            <img src={images[0]} className="card-data__img" />
            <h3 className="card-data__title">{title}</h3>
            <h1 className="card-data__price">S/. {price}</h1>
          </div>
          <div className="card-button">
            <div className="card-button__wishlist">
              <IconHeart/>
            </div>
            <div className="card-button__add">
              {
                quantity===0?
                <p onClick={opencart}>Agregar</p>
                :
                <p>Agregado</p>
              }
            </div>
          </div>
          {isAdded && (
            <div className="card-msj">
              <p>Agregado</p>
              <button  onClick={()=>setIsAdded(!isAdded)}>cerrar</button>
              <button  onClick={()=>navigate('/checkout')}>ir al carrito</button>
            </div>
          )}
        </div>
      </div>
  );
};
