
import { Route, Routes } from "react-router-dom"

import Header from "../../components/header"
import Footer from "../../components/footer"
import PageNotFound from "../../components/pagenotfound"

import Home from "./Home"
import About from "./About"
import Contact from "./Contact"

const Frontend = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
        </>
    )
}

export default Frontend
