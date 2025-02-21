import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";

import { CartContext } from "../../context/cartContext";
import { api } from "../../lib/api"

export interface ProductProps{
    id: number;
    title: string;
    description: string
    price: number;
    cover: string; 

}

export function Home () {
    const [products, setProducts] = useState<ProductProps[]>([]);
    const { addItemCart, setInforProductItem } = useContext(CartContext);
    const navegate = useNavigate();

    useEffect(()=> {
        async function getProducts() {
            const response = await api.get("/products");
            console.log(response.data);
            setProducts(response.data)
        }

        getProducts();
    }, []);

    function handleAddCart(product: ProductProps) {
        addItemCart(product);
        
   }

   function handleItemInfo(item: ProductProps) {
    setInforProductItem(item);
    navegate(`/product/${item.id}`);
   }

    return(
        <div>
            <main className="max-w-7xl px-4 mx-auto">
                <h1 className="font-black text-xl mb-4 mt-10 text-center ">Produtos em alta</h1>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5">

                    {products.map((product)=> (
                        <section 
                        key={product.id}
                        className="w-full rounded-lg max-w-full mb-2"
                        onClick={() => {
                            handleItemInfo(product)
                        }}>
                        <div className="w-full">
                            <img className="rounded-lg" src={product.cover} />
                        </div>
                        <p className="font-medium mt-1 mb-2">{product.title}</p>
                        <div className="flex gap-3 items-center">
                            <strong className="text-zinc-700/90">
                                {product.price.toLocaleString("pt-BR", {
                                    style: "currency",
                                    currency: "BRL"
                                })}
                            </strong>
                            <button onClick={() => {
                                handleAddCart(product)
                            }} className="bg-zinc-900 p-1 rounded">
                                <BsCartPlus size={20} color="#fff"/> 
                            </button>
                        </div>
                    </section>
                    ))}
                    
                </div>
            </main>
        </div>
    )
}