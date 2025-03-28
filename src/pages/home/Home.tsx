import './home.css'
import {useEffect} from "react";
import {ButtonEffect} from "./ButtonEffect.ts";

const Home = () => {
    useEffect(() => {
        new ButtonEffect(document.querySelector('button')!)
    }, [])
    const gotoHome = () => {}
    return (
        <button>Click to explore</button>
    );
};

export default Home;
