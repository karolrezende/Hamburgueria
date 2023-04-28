import { ReactNode, useContext, createContext, useState, useEffect} from "react";
import { api } from "../app/api";
import { useContextProvider } from "./Provider";

interface iPropsProvider {
    children: ReactNode
}

interface iPropsContext{
    products: iProducts[]
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

    return(
        <ContextCart.Provider value={{products}}>
            {children}
        </ContextCart.Provider>
    )
}
export const useCartContext =()=> useContext(ContextCart)