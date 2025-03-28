import './App.css'
import {BrowserRouter, Route, Routes} from "react-router";
import {ROUTES} from "./constants/routes.ts";
import Home from "./pages/home/Home.tsx";
import NoFound from "./pages/404/NoFound.tsx";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTES.home} element={<Home />}/>
                <Route path={ROUTES._404} element={<NoFound />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
