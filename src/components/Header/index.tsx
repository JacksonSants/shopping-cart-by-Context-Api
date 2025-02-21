import { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import  logo  from "../../Assets/shop.png"

import { CartContext } from "../../context/cartContext";

export function Header () {

    const {cartAmout} = useContext(CartContext);
    
    return(
        <header className="w-full px-1 bg-slate-200">
            <nav className="w-full max-w-7xl h-14 flex items-center justify-between px-5 mx-auto">
                <Link className="font-bold text-2xl" to="/">
                    <div className="w-full max-w-1/12">
                        <img src={logo} alt="logo" />
                    </div>
                </Link>

                <Link className="relativa" to="/cart">
                    <FiShoppingCart size={22} className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text"/>
                    {cartAmout > 0 && (
                        <span className="absolute right-3 top-1 px-2.5 bg-sky-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs">
                            {cartAmout}
                        </span>
                    )}
                </Link>
            </nav>
        </header>
    )
}