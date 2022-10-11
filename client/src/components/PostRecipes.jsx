import { NavLink } from 'react-router-dom'
import style from '../styles/PostRecipes.module.css'

export default function PostRecipes(props) {
   
    let mensage = 'Tipo de dieta: '
    let name = 'Nombre: '
    if(!props.diets.length){
        mensage = ''
        name=''
    }
       console.log('id: ', props.id)

    if(props.id==='error')
        return (
            <div className={style.card}><h2>
                    {name} {props.name}
                </h2>
                <img src={props.image} alt='Image not found' /> 
            </div>
        )
    return (
            <NavLink to={`/recipedetail/${props.id}`}  className={style.link}>
                <div className={style.card}>

                    <h2>
                                {name} {props.name}
                        </h2>
                        <img src={props.image} alt='Image not found' /> 
                        <h3>{mensage} {props.diets?.map(r => '"' + r + '" ')}
                        </h3>
                </div>
      
            </NavLink>
                
    )
}