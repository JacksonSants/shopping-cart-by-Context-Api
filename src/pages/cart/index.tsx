import { useContext } from "react"

import { CartContext } from "../../context/cartContext"
import { FaShoppingCart } from "react-icons/fa"

export function Cart () {

    const { cart, addItemCart, removeItemForCart, total} = useContext(CartContext)
    return(
        <div className="w-full max-w-7xl mx-auto">
            <h1 className="font-medium text-2xl text-center my-4">Meu carrinho</h1>

            {cart.length === 0 &&(
                <div 
                    className="text-center p-8 border border-dashed rounded-lg shadow-lg bg-gray-100 max-w-sm mx-auto">
                    <FaShoppingCart 
                        className="text-gray-400 text-6xl mb-4" />
                    <h2 
                        className="text-xl font-semibold text-gray-700">Seu carrinho está vazio</h2>
                    <p 
                        className="text-gray-500 mt-2">Adicione itens ao seu carrinho para começar a comprar.</p>
                </div>
            )}
            
            {cart.map((item) => (
                <section 
                key={item.id}
                className="flex items-center justify-between border-b-2 border-gray-300 py-2 px-1">
                <img src={item.cover} alt="image-1" 
                className="w-28 rounded-md"/>

                <strong>
                    Preço: {item.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    })}
                </strong>

                <div className="flex items-center justify-center gap-3">
                    <button 
                    onClick={() => {
                        removeItemForCart(item);
                    }}
                    className="bg-slate-600 rounded text-white font-medium flex items-end justify-between px-2">
                        -
                    </button>

                    <p>{item.amount}</p>

                    <button 
                    onClick={() => {
                        addItemCart(item)
                    }}
                    className="bg-slate-600 rounded text-white font-medium flex items-end justify-between px-2">
                        +
                    </button>
                </div>

                <strong className="float-right">
                    Subtotal: {item.total.toLocaleString("pt-bR", {
                        style: "currency",
                        currency: "BRL",
                    })}
                </strong>
                
            </section>
            ))}

            <p className="font-bold mt-4">
                {total}
            </p>
        </div>
    )
}