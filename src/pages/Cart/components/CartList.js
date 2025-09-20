import { useState } from "react";
import { CartCard } from "./CartCard";
import { Checkout } from "./Checkout";

export const CartList = () => {
  const [checkout, setCheckout] = useState(false);

  const cartlist = [
    {
      "id": 10001,
      "name": "Mindful Momentum",
      "overview": "Build daily mindfulness habits in minutes.",
      "long_description": "A science-backed guide to cultivating clarity and calm through short, consistent mindfulness practices.",
      "price": 29,
      "poster": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40",
      "image_local": "/assets/images/10001.avif",
      "rating": 5,
      "in_stock": true,
      "size": 5,
      "best_seller": true
    },
    {
      "id": 10002,
      "name": "Digital Product Playbook",
      "overview": "Launch passive income products fast.",
      "long_description": "Step-by-step guide to creating and selling digital products like printables, templates, and mini-courses.",
      "price": 19,
      "poster": "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40",
      "image_local": "/assets/images/10002.avif",
      "rating": 5,
      "in_stock": true,
      "size": 2,
      "best_seller": false
    },
    {
      "id": 10003,
      "name": "JavaScript Cart Mastery",
      "overview": "Master dynamic cart logic with JS.",
      "long_description": "Covers modular architecture, event delegation, DOM manipulation, and Jasmine testing for cart systems.",
      "price": 29,
      "poster": "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40",
      "image_local": "/assets/images/10003.avif",
      "rating": 3,
      "in_stock": true,
      "size": 1,
      "best_seller": false
    }
  ];

  return (
    <>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          My Cart ({cartlist.length})
        </p>
      </section>
      
      <section>
        { cartlist.map((product) => {
          return <CartCard key={product.id} product={product}></CartCard>
        }) }
      </section>

      <section className="max-w-4xl m-auto">
        <div className="flex flex-col p-2 border-b dark:border-slate-700 text-lg dark:text-slate-100">
          <p className="flex justify-between my-2 text-2xl">
            <span className="font-semibold">Total Amount:</span>
            <span className="text-3xl">$99</span>
          </p>
        </div>
        <div className="text-right my-5">
          <button onClick={() => setCheckout(true)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-base px-7 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700">
            PLACE ORDER <i className="ml-2 bi bi-arrow-right"></i>
          </button>
        </div>
      </section>
      { checkout && <Checkout setCheckout={setCheckout} /> }
    </>
  )
}
