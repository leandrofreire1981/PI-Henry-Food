import { useState } from "react"
import { useHistory, useLocation, useParams } from "react-router-dom"
import style from '../styles/Home.module.css'
import stylePage from '../styles/Page.module.css'
import PostRecipes from "./PostRecipes"

export default function Paginador(props){
    const  recipes  = props.recipes
    let RECIPE_PAGE = 9

   
    const history = useHistory()
    const location = useLocation()
    
  
    
    let query = new URLSearchParams(location.search)
    let start = parseInt(query.get('inicio')) || 1
    let end = parseInt(query.get('fin')) || 9
    RECIPE_PAGE = end - start
    if(start < 0) history.push({search: `?inicio=1&fin=9`})


    const renderRecipes = recipes.slice(start -1, end)

    function prevPage(e){
        history.push({search: `?inicio=${start - RECIPE_PAGE - 1}&fin=${end - RECIPE_PAGE - 1}`})
    }
    
    function nextPage(e){
        history.push({search: `?inicio=${start + RECIPE_PAGE + 1}&fin=${end + RECIPE_PAGE + 1}`})
    }
    

    return (
        <div>
                                      <h2 className={style.title}>Mostrando elementos del {start} al {end}  </h2>  
                      {start > RECIPE_PAGE && <button  className={stylePage.button} onClick={prevPage}>Pagina previa</button>}
                      {end < recipes.length - RECIPE_PAGE && <button className={stylePage.button} onClick={nextPage}>Pagina siguiente</button>}
                      <div className={style.conteiner}>

                    {    
                        renderRecipes?.map((r, i) => (
                            <div key={i}> 
                                <PostRecipes id={r.id} name={r.name} summary={r.summary} healthScore={r.healthScore} image={r.image} diets={r.diets} steps={r.steps} />    
                            </div>
                    ))} 
                    </div>
            
        </div>
    )
}