import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./components/home";
import Roscas from "./components/roscas";
import Empadas from './components/empadas'
import Carrinho from './components/carrinho'

export default function MyRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" exact />
                <Route element={<Roscas />} path="/roscas"/>
                <Route element={<Empadas />} path="/empadas" />
                <Route element={<Carrinho />} path="/carrinho" />
            </Routes>
        </BrowserRouter>
    )
}