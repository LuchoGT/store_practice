import { AuthRoutes } from "@/modules/auth/routes/AuthRoutes"
import { StoreRoutes } from "@/modules/store/routes/StoreRoutes"
import { Routes,Route } from "react-router-dom"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/*" element={<StoreRoutes/>}/>
        {/* <Route path="/*" element={<AuthRoutes/>}/> */}
    </Routes>
  )
}
