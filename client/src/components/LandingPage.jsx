import { Link, useHistory } from 'react-router-dom'
import style from '../styles/LandingPage.module.css'

export default function LandingPage(){
    
const history = useHistory()

    return (
        <div className={style.landing}>
            <Link to='/home'>
                <button className={style.button}>Entrar</button>
            </Link>
        </div>
    )
}