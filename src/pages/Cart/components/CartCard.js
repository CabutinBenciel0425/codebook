import { Link } from "react-router-dom"
import { useCart } from "../../../context"

export const CartCard = ({product}) => {
  const { removeFromCart } = useCart();
  
  return (
    <div className="flex flex-wrap justify-between border-b dark:border-slate-700 max-w-4xl m-auto p-2 mb-5 ">
      <div className="flex">
          <Link to={`products/${product.id}`}>
            <img className="w-32 rounded mr-4" src={product.image_local} alt={product.name} />
          </Link>
          <div className="">
            <Link to={`products/${product.id}`}>
              <p className="text-2xl ml-2 dark:text-slate-200">{product.name}</p>
            </Link>            
            <button onClick={() => removeFromCart(product)} className="my-6 text-sm ml-2 text-removeBtn  px-4 py-1 rounded-lg border-2 border-removeBtn hover:bg-removeBtn hover:text-white">Remove</button>
          </div>
      </div>
      <div className="text-xl m-2 dark:text-slate-200">
        <span>${product.price}</span>
      </div>
    </div>
  )
}
