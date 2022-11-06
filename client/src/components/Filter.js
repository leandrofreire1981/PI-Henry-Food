import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { alphaOrder, reverseAlphaOrder } from "../actions"
import style from '../styles/Home.module.css'
import stylePage from '../styles/Page.module.css'

export default function Filter(props){
    const RECIPE_PAGE = 9
    let recipes = props.recipes
    let setRender = props.setRender
    console.log('recipes de filter: ', recipes)

    const dispatch = useDispatch()
    
    
    
    
    function alphaOrderRecipes(e){
        dispatch(alphaOrder(recipes))
       // setRecipes(recipes1.sort((a, b) => a.name.localeCompare(b.name)));
        
        setCurrentPage(1)
        setRender('order')
    }
    
    function reverseOrder(){
        dispatch(reverseAlphaOrder(recipes))
      // setRecipes(recipes1.reverse((a, b) => a.name.localeCompare(b.name)))
        setCurrentPage(1)
        setRender('reverse order')
    }
    
    const [ currentPage, setCurrentPage ] = useState(1)
    const lastRecipe = currentPage * RECIPE_PAGE
    const firstRecipe = lastRecipe - RECIPE_PAGE 

    return (
        <div>
        <button className={stylePage.button} onClick={alphaOrderRecipes}>a-z</button> 
        <button className={stylePage.button} onClick={reverseOrder}>z-a</button> 
        </div>
    )
    
}