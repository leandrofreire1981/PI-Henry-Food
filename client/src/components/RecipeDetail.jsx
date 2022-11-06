import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useHistory, useParams } from "react-router-dom"
import { clreaState, getRecipesByID } from "../actions"
import imgLoading from '../img/simpsons.gif'
import style from '../styles/RecipeDetail.module.css'
import styleHome from '../styles/Home.module.css'
import stylePage from '../styles/Page.module.css'

export default function RecipeDetail(){
    const history = useHistory()
    const { id }= useParams()
    const dispatch = useDispatch()
    
    useEffect(() => {
       dispatch(clreaState())
        dispatch(getRecipesByID(id))
    
    },[])
    
    const recipe = useSelector(state => state.recipe)
    if(!!!recipe.created){
        recipe.name = recipe.title
    }
    
    

    if(!recipe.image){
        return(<div>
            <img className={style.RecipeDetail} src={imgLoading} alt='not found'/>
        </div>)
    }
    else
    return (
        <div className={style.RecipeDetail}>
           <h1 className={style.textA}>{recipe.name}</h1>
           <div  >

           <div className={style.textB}>Healtscore: {recipe.healthScore}</div> 
           <div className={style.textC}>Resumen: {recipe.summary?.replace(/<[^>]*>?/g, "")}</div>
           <div>Tipo de dieta:
            <div>
                 {recipe.diets?.map((r, i) => (
                     <p key={i}>{r.name}</p>))} 
            </div>
           </div>
           <div>Pasos para cocinar:
            <div>
                 {recipe.steps?.map((r, i) => (
                     <p>{r}</p>))} 
            </div>
            </div>
            <img src={recipe.image} alt='not found' />
            <div>
                <NavLink to='/home' >
                    <button className={stylePage.button}>Home</button>
                </NavLink>
        </div>
            </div>

        </div>
    )
}