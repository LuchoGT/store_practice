import { IconMenu, IconPlus, IconX } from "@tabler/icons-react"
import { useApiPlatzi } from "../../hook/useApiPlatzi"
import { useCart } from "../../hook/useCart"
import './CartItem.scss'

type CartItemProps = {
    id: number
    quantity: number
  }

export const CartItem = ({id,quantity}:CartItemProps) => {

    const {cartQuantity,addToCart,restToCart,removeToCart}  = useCart();

    const {characters} = useApiPlatzi();

    const item = characters?.find(i=>i.id===id)
    if(item==null) return null;

  return (
    <div className="card-cart">
      <div className="card-cart__image">
        <img src={item.images[0]} alt={item.title} />
      </div>
      <div>
        <div>{item.title}</div>
        <div>
          <div>
            <IconMenu onClick={()=>restToCart(id)}/>
             {quantity}
            <IconPlus onClick={()=>addToCart(id)}/>
          </div>
          <div>{item.price}</div>
        </div>
      </div>
      <div>
        <IconX onClick={()=>removeToCart(id)}/>
      </div>
    </div>
  )
}
