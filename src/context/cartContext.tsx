import { ReactNode, createContext, useState } from "react";
import { toast } from "react-hot-toast"

import { ProductProps } from "../pages/home";

interface CartContextData{
    cart: CartProps[],
    cartAmout: number,
    addItemCart: (product: ProductProps) => void,
    setInforProductItem: (product: ProductProps) => void;
    removeItemForCart: (product: CartProps) => void,
    total: string,
}

interface CartProps {
    id: number,
    title: string,
    description: string,
    price: number,
    cover: string,
    amount: number,
    total: number,
}

interface CartProviderProps {
    children: ReactNode;
}

export const CartContext = createContext({} as CartContextData)

export function CartProvider({ children } : CartProviderProps) {

    const [cart, setCart] = useState<CartProps[]>([]);
    const [total, setTotal] = useState("");
    const [, setInfoProduct] = useState<ProductProps>();
    function addItemCart(newItem: ProductProps) {
        const indexIem = cart.findIndex(item => item.id === newItem.id);

        if(indexIem !== -1) {
            let cartList = cart
            cartList[indexIem].amount  = cartList[indexIem].amount + 1;
            cartList[indexIem].total = cartList[indexIem].amount * cartList[indexIem].price;
            setCart(cartList);
            totalResultCart(cartList);
            return;
        }

        let data = {
            ...newItem,
            amount: 1,
            total: newItem.price,
        }

        setCart(products => [...products, data]);
        totalResultCart([...cart, data])
        toast.success("Produto adicionado ao carrinho");

    }

    function removeItemForCart(product: CartProps){
        const indexItem = cart.findIndex(item => item.id === product.id);

        if(cart[indexItem]?.amount > 1){
            let cartList = cart;

            cartList[indexItem].amount = cartList[indexItem].amount - 1;
            cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price;

            setCart(cartList);
            totalResultCart(cartList);
            return;
        }

        const removeItem = cart.filter(item => item.id !== product.id);
        setCart(removeItem);
        totalResultCart(removeItem);
    }

    function totalResultCart(items: CartProps[]) {
        let result = items.reduce((acc, obj) => {
            return acc + obj.total;  
        }, 0); 
        const formatResult = result.toLocaleString("pt-BR", 
            {
                style: "currency",
                currency: "BRL",
            }
        )
        setTotal(formatResult);
    }

    function setInforProductItem(item: ProductProps){
        console.log(item);
        setInfoProduct(item);
    }
    

    return(
        <CartContext.Provider value={{
            cart,
            cartAmout: cart.length,
            addItemCart,
            removeItemForCart,
            total,
            setInforProductItem,
            }}>
            { children }
        </CartContext.Provider>
    )
}