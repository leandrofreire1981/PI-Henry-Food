import { Link, NavLink } from "react-router-dom";
import Recipes from "./Recipes";
import style from '../styles/Nav.module.css'

export default function Nav() {

    return (
        <nav className={style.nav}>
            <NavLink to='/' className={style.Link}>
                <p>Inicio</p>
            </NavLink>
            <NavLink to='/home' className={style.Link}>
                <p>Home</p>
            </NavLink>
            <NavLink to='/createrecipes' className={style.Link}>
                <p>Crear Receta</p>
            </NavLink>
            <NavLink to='/buscar' className={style.Link}>
                <p>Buscar recetas</p>
            </NavLink>
        </nav>
    )
    }