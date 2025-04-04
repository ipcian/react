import './home.css'
import {useEffect} from "react";
import {ButtonEffect} from "./ButtonEffect.ts";
import { useNavigate } from 'react-router';

const Home = () => {
    useEffect(() => {
        new ButtonEffect(document.querySelector('button')!)
    }, [])
    const navigate = useNavigate();
    const gotoHome = () => {
        navigate('/home')
    }
    return (
        <button onClick={gotoHome}>Click to explore</button>
    );
};

export default Home;
