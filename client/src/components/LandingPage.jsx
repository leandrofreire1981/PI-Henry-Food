import { Link } from 'react-router-dom'
import style from '../styles/LandingPage.module.css'

export default function LandingPage(){

    return (
        <div className={style.landing}>
            <Link to='/home'>
                <button className={style.button}>Entrar</button>
            </Link>
        </div>
    )
}