import { BsCartPlus } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { useContext  } from "react";
import { CartContext } from "../../context/cartContext";

export function Product() {
    const { id } = useParams();

    return (
        <div>
            <section className="max-w-7xl px-4 mx-aut">
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
                    <div className="rounded-lg shadow-md">
                        <img src="https://i.imgur.com/uXrbyfA.jpg" alt="image-1" />
                    </div>
                    <div>
                        <p className="text-justify">
                            inforProductItem
                        </p>
                        <div className="flex items-center justify-self-start gap-3 py-3">
                            <button 
                            className="bg-slate-600 rounded text-white font-medium flex items-end justify-between px-2">
                                -
                            </button>
                            <p>1</p>
                            <button className="bg-slate-600 rounded text-white font-medium flex items-end justify-between px-2">
                                +
                            </button>
                            <button className="bg-zinc-900 p-1 rounded">
                                <BsCartPlus size={20} color="#fff"/> 
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}