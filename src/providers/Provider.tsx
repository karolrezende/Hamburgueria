import { ReactNode, createContext, useState, useContext } from "react";

interface iPropsProvider {
    children: ReactNode
}
interface iContext {
    token: string;
    setterToken: ({token} : iRequestToken)=> void
    logOut: () => void
}

interface iRequestToken {
    token: string
}

const Context = createContext<iContext>({} as iContext)

export const Provider = ({children}: iPropsProvider) =>{
    const [token, setToken] = useState<string>('')

    const setterToken = ({token} : iRequestToken)=>{
        setToken(token)
    }
    const logOut = () => {
        setToken('')
    }
    return(
        <Context.Provider value={{token, setterToken, logOut}}>
            {children}
        </Context.Provider>
    )
}
export const useContextProvider = () => useContext(Context)