import { IconMoodEmpty } from "@tabler/icons-react";
import "./CartPage.scss";
import { useCart } from "../../hook/useCart";
import { CartItem } from "../../sections/CartItem/CartItem";
import { Platzi } from "@/interfaces/platzi";

type StoreItemProps = {
    id:number;
    title:string;
    price:number;
    description:string;
    images:Array<string>;
}


export const CartPage = ({ id }: StoreItemProps) => {
  const { cartProducts, getItemQuantity } = useCart();

  console.log(cartProducts);
  
  const quantity = getItemQuantity(id);
  return (
    <>
      {/* {quantity === 0 ? (
        <main className="cart">
          <div className="cart-header">
            <div className="cart-header__logo">Logo</div>
            <h2 className="cart-header__title">Mi carrito</h2>
          </div>
          <div className="cart-empty">
            <IconMoodEmpty color="white" size={50} />
            <p className="cart-empty__msg">Tu carrito esta vacío</p>
            <div className="cart-empty__button">Haz una compra</div>
          </div>
        </main>
      ) : (
        <main>
          <h1>Mi carrito</h1>
          {cartProducts.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </main>
      )} */}
      {/* {
        quantity !==0 && <main className="cart">
        <div className="cart-header">
          <div className="cart-header__logo">Logo</div>
          <h2 className="cart-header__title">Mi carrito</h2>
        </div>
        <div className="cart-empty">
          <IconMoodEmpty color="white" size={50} />
          <p className="cart-empty__msg">Tu carrito esta vacío</p>
          <div className="cart-empty__button">Haz una compra</div>
        </div>
      </main>
      }
      {
        quantity ===0 &&
        <main>
        <h1>Mi carrito</h1>
        {cartProducts.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </main>
      } */}
    <main className="cart">
      <div className="cart-header">
        <div className="cart-header__logo">Logo</div>
        <h2 className="cart-header__title">Mi carrito</h2>
      </div>
      {cartProducts.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <div className="cart-footer">
        <div className="cart-footer__resume">
          <h3>Resumen</h3>
          <div className="cart-footer__div">
            <span>n productos</span>
            <span>100.00</span>
          </div>
        </div>
        <div className="cart-footer__total">
          <p>Total <span>100.00</span> </p>
          <div className="cart-footer__button">Continuar</div>
        </div>
        </div>
    </main>
    </>
  );
};
