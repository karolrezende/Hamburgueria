import { Navigate } from "react-router-dom";

interface iPropsProtected {
    children: any,
    token: string //
}   

export default function ProtectedRoute({children, token} : iPropsProtected) {
    if(!token){
        return <Navigate to='/'/>
    }
    return children
} 
