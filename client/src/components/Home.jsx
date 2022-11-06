import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import PostRecipes from "./PostRecipes"
import Page from "./Page"
import style from '../styles/Home.module.css'
import stylePage from '../styles/Page.module.css'
import { useHistory, useLocation } from "react-router-dom"
import Paginador from "./Paginador"
import Filter from "./Filter"

export default function Home(props) {
    const RECIPE_PAGE = 9
    const recipes = useSelector(state => state.recipes)
 
    const [ render, setRender ] = useState('disorder')
    
    return (
        
        <main className={style.Home}>
            <div className={style.controls}>
                <Filter recipes={recipes} setRender={setRender}  />
                    
                <h1 className={style.title}>Recetas</h1>


                      {recipes && <Paginador  recipes={recipes}/>}
                 
            </div>    

          </main>
    

) 



/*     return (
        
            <main className={style.Home}>
                <div className={style.controls}>
                    <button className={stylePage.button} onClick={alphaOrderRecipes}>a-z</button>   
                    <button className={stylePage.button} onClick={reverseOrder}>z-a</button> 
                        
                    <h1 className={style.title}>Recetas</h1>
                            
                    {<Page refresh={refresh} currentPage={currentPage} length={recipes.length} />}
                </div>    
                <div className={style.conteiner}>

                        {    
                            renderRecipes?.map((r, i) => (
                                <div key={i}> 
                                    <PostRecipes id={r.id} name={r.name} summary={r.summary} healthScore={r.healthScore} image={r.image} diets={r.diets} steps={r.steps} />    
                                </div>
                    ))} 
                </div>
              </main>
        
    
    ) */



}
