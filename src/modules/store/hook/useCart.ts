import { useLocalStorage } from "./useLocalStorage";

type CartItem={
    id:number,
    quantity:number,
}
export const useCart = () => {
 

    const [cartProducts, setCartProducts] = useLocalStorage<CartItem[]>(
        "shopping-cart",
        []
      )

      const cartQuantity = cartProducts.reduce(
        (quantity, item) => item.quantity + quantity,
        0
      )


    const getItemQuantity=(id:number)=>{
         const cartItem = cartProducts.find(item => item.id === id);
          const quantity = cartItem ? cartItem.quantity : 0;
          return quantity;
  
    }

    const addToCart=(id:number)=>{
        setCartProducts(currItems => {
            if (currItems.find(item => item.id === id) == null) {
              return [...currItems, { id, quantity: 1 }]
            } else {
              return currItems.map(item => {
                if (item.id === id) {
                  return { ...item, quantity: item.quantity + 1 }
                } else {
                  return item
                }
              })
            }
          })
    }

    const restToCart=(id:number)=>{
      setCartProducts(currItems => {
        if (currItems.find(item => item.id === id)?.quantity === 1) {
          return currItems.filter(item => item.id !== id)
        } else {
          return currItems.map(item => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity - 1 }
            } else {
              return item
            }
          })
        }
      })
    }
    const removeToCart=(id:number)=>{
      setCartProducts(currItems => {
        return currItems.filter(item => item.id !== id)
      })
    }
  
    return{
        cartProducts,
        cartQuantity,
        getItemQuantity,
        addToCart,
        restToCart,
        removeToCart
    }
}
