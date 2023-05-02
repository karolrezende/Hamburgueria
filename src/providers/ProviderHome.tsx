import { ReactNode, useContext, createContext, useState, useEffect} from "react";
import { api } from "../app/api";
import { useContextProvider } from "./Provider";

interface iPropsProvider {
    children: ReactNode
}

interface iPropsContext{
    products: iProducts[],
    addCart: (hamburguer: iProducts) => void
    removeCart: (hamburguer: iProducts)=> void
    cleanCart: () => void
    cart: iProducts[]
    total: number
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
    const [total, setTotal]= useState(0)
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
        if(cart.includes(hamburguer)){
            setCart([...cart])
        }else{
            setCart([...cart, hamburguer])
        }
    }
    function removeCart(hamburguer: iProducts){
        setCart(cart.filter(burguer=> hamburguer.id !== burguer.id))
    }
    function cleanCart(){
        setCart([])
        setTotal(0)
    }
    useEffect(()=>{
        function getTotal(){
            cart.map(prod=> setTotal(prod.price+total))
        }
        getTotal()
    }, [cart])
    console.log(total)
    return(
        <ContextCart.Provider value={{products, addCart, cart, removeCart, total, cleanCart}}>
            {children}
        </ContextCart.Provider>
    )
}
export const useCartContext =()=> useContext(ContextCart)