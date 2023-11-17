import { Route, Routes } from "react-router-dom"
import { StorePage } from "../pages/StorePage/StorePage"
import { OtroPage } from "../pages/Otro/OtroPage"
import { LoginPage } from "@/modules/auth/pages/LoginPage/LoginPage"
import { RegisterPage } from "@/modules/auth/pages/RegisterPage/RegisterPage"
import { LostPasswordPage } from "@/modules/auth/pages/LostPasswordPage/LostPasswordPage"
import { CartPage } from "../pages/CartPage/CartPage"
export const StoreRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<StorePage/>}/>
      <Route path="/checkout" element={<CartPage/>}/>
      {/* <Route path="/ga" element={<OtroPage/>}/> */}
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/lost-password" element={<LostPasswordPage/>}/>

      <Route path="/:id" element={<OtroPage/>}/>
    </Routes>
  )
}
