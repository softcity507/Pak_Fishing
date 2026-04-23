
import { Route, Routes } from "react-router-dom"

import PageNotFound from "../../components/pagenotfound"

import Login from "./login"
import Register from "./register"

const Auth = () => {
    return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default Auth
