import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import SignUp from "../pages/SignUp"
import Cart from "../pages/Cart"

function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
    )
}

export default AllRoutes