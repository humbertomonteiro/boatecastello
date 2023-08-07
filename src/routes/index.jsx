import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Events from "../pages/Events";
import Location from "../pages/Location";
import Menu from "../pages/Menu";
import Contacts from "../pages/Contacts";

export default function RoutesApp() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/events' element={<Events />} />
            <Route path='/location' element={<Location />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/contacts' element={<Contacts />} />
        </Routes>
    )
}