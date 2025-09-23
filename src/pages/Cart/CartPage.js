import { CartEmpty } from "./components/CartEmpty";
import { CartList } from "./components/CartList";
import { useCart } from "../../context";
import { useTitle } from "../../hooks/useTitle";

export const CartPage = () => {
  const { cartList } = useCart();
  useTitle(`Cart (${cartList.length} ${cartList.length > 1 ? "items" : "item"}) | Codebook`);

  return (
    <main>   
      { cartList.length ? <CartList /> : <CartEmpty />}
    </main>
  )
}
