import './home.css'
import {useEffect} from "react";
import {ButtonEffect} from "./ButtonEffect.ts";

const Home = () => {
    useEffect(() => {
        new ButtonEffect(document.querySelector('button')!)
    }, [])
    return (
        <button>Click Me</button>
    );
};

export default Home;
