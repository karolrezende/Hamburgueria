import { ReactNode, useContext, createContext, useState, useEffect} from "react";
import { api } from "../app/api";
import { useContextProvider } from "./Provider";

interface iPropsProvider {
    children: ReactNode
}

interface iPropsContext{
    products: iProducts[],
    addCart: (hamburguer: iProducts) => void
    cart: iProducts[]
}
export interface iProducts{
    id: number,
    name: string,
    category: string,
    price: number,
    img: string
}
const ContextCart = createContext<iPropsContext>({} as iPropsContext)

export const ProviderHome = ({children}: iPropsProvider)=>{
    const [products, setProducts] = useState<iProducts[]>({} as iProducts[])
    const [cart, setCart] = useState<iProducts[]>([])
    const {token} = useContextProvider()

    useEffect(()=>{
        async function getProduct(){
            const myProducts = await api.get<iProducts[]>('/products',{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            }).then (
                res => setProducts(res.data)
            )
        }getProduct()
    }, [])
    
    function addCart(hamburguer :iProducts){
        setCart([...cart, hamburguer])
    }
    console.log(cart)
    return(
        <ContextCart.Provider value={{products, addCart, cart}}>
            {children}
        </ContextCart.Provider>
    )
}
export const useCartContext =()=> useContext(ContextCart)