import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../components/Header"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Signin from "../pages/Signin"
import WorkShop from "../pages/Workshop"

function Router(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="" element={<Header/>}>
            <Route path="/" element={<Home/>}/>   
            <Route path="signin" element={<Signin/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="workshop" element={<WorkShop/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default Router