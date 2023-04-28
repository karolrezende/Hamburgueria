import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signin from "./pages/Signin/Signin";
import Home from "./pages/Home/Home";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { useContextProvider } from "./providers/Provider";
import { ProviderHome } from "./providers/ProviderHome";
export default function Routers() {
  const {token} = useContextProvider()
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/cadastro" element={<Signin/>}/>
          <Route path="/home" element={<ProtectedRoute token={token}> 
            <ProviderHome>
              <Home/> 
            </ProviderHome>
           </ProtectedRoute>}/>
      </Routes>
    </div>
  )
}
