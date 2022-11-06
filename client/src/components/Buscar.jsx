import { useState } from "react";
import { useSelector } from "react-redux";
import Page from "./Page";
import PostRecipes from "./PostRecipes";
import image from '../img/error.jpg'
import styleHome from '../styles/Home.module.css'
import stylePage from '../styles/Page.module.css'
import styleRecipe from '../styles/RecipeDetail.module.css'
import { useHistory } from "react-router-dom";

export default function Buscar(){
    
    const RECIPE_PAGE = 9
    const history = useHistory()
   
    
    let array = []
    const recipes = useSelector(state => state.recipes)
    const diets = useSelector(state => state.diets)

    const [ recipesFinded, setRecipesFinded ] = useState ([])
    const [ currentPage, setCurrentPage ] = useState(1)
    const [ input, setInput ] = useState({
        
    })
    
    const lastRecipe = currentPage * RECIPE_PAGE
    const firstRecipe = lastRecipe - RECIPE_PAGE
    
    let aux = [...recipesFinded]
    let renderRecipes = aux.slice(firstRecipe, lastRecipe)
  
    
    function handleOnChange(e){
        setInput({[e.target.name]:e.target.value})
        let button = document.getElementById('button')
        let ingreso = document.getElementsByClassName('input')
        switch (e.target.name) {
            case 'name':
                button.value= 'Buscar por nombre'
                break;
            case 'diets':
                button.value= 'Buscar por dietas'
                break;
            default:
                button.value= 'Buscar por healtScore'
                break;
        }
        
        button.type =  'submit' 
        switch (e.target.name) {
            case 'name':
                ingreso[1].value = ''
                ingreso[2].value = ''
                break;
            case 'diets':
                ingreso[0].value = ''
                ingreso[2].value = ''
                break;
            case 'healthScore':
                ingreso[0].value = ''
                ingreso[1].value = ''
                break;
            default:

                break;
        }
    }
    
    function handleOnSubmit(e){
        e.preventDefault()
        let ingreso = document.getElementsByClassName('input')
        console.log('tipo de ingreso: ', ingreso)

        if(ingreso[0].value){
            console.log('ingresaste: ', ingreso[0].name)
            for(const iterator of recipes)
                if(iterator.name.toLocaleLowerCase().includes(input.name.toLocaleLowerCase()))
                    array.push(iterator)
        }
        else if(ingreso[1].value){
            console.log('ingresaste: ', input.diets.toLocaleLowerCase())
            for (let i = 0; i < recipes.length; i=i+1) 
                for (let j = 0; j < recipes[i].diets.length; j++) {
                    if(recipes[i].diets[j]===input.diets.toLocaleLowerCase())
                        array.push(recipes[i])   
                }
        }
        else if(ingreso[2].value){
            console.log('ingresaste: ', input.healthScore)
            for (const iterator of recipes) {
                if(iterator.healthScore==input.healthScore)
                    array.push(iterator)
            }
        }
        if(array.length===0)
        array = emptyElement()
        
        
        setCurrentPage(1)
        setRecipesFinded([...array])
        console.log('enconrtadas: ',   array)
        e.target[0].value=''
    }

    function emptyElement(){

        return ([{
            id: 'error',
            name: 'No se encuentra la receta',
            summary: '',
            healthScore: -1,
            steps: [],
            diets: [],
            image: image
        }])

    }
    
    function refresh(ref){
        setCurrentPage(ref)
    }
    
    function handleOnRefresh(e){
        e.preventDefault()
        setRecipesFinded([])
        setCurrentPage(1)
        setInput('')
    }

  

    
    function alphaOrderRecipes(e){
    
       let array = [...recipesFinded]
       setRecipesFinded([...array.sort((a, b) => a.name.localeCompare(b.name))])
       setCurrentPage(1)      
    }

    function reverseOrder(){
        
       let array = [...recipesFinded]
       setRecipesFinded([...array.reverse((a, b) => a.name.localeCompare(b.name))]) 
       setCurrentPage(1)
    }

    
    if(recipesFinded.length===0)
    return (
        <div className={styleHome.Home}>
                        <h1 className={styleHome.title}>Buscar recetas</h1>
            <form onSubmit={(e) => handleOnSubmit(e)}>
                <div className={styleHome.controls}>
                    <label className={styleRecipe.textB}>Ingrese una comida: </label>
                    <input  type='text' name='name' title='Deben ser solo letras' className='input' onChange={handleOnChange}/>
                    <div>

                    <label className={styleRecipe.textB}>Ingrese tipo de dieta: </label>
                    <select name='diets' className='input' onChange={handleOnChange}>
                            <option  value=''>Seleccionar</option>
                            {
                                diets.length? diets.map((r, i) => (
                                    <option key = {i} value={r.name}>{r.name}</option>
                                    )): null}
                    </select>
                    </div>

                    <div>
                    <label className={styleRecipe.textB}>Healtscore: </label>
                    <input type='range' name='healthScore' min='0' max='100' className='input' onChange={handleOnChange}/>
                    <label>{input.healthScore}</label>
                    </div>
                    <input  type='hidden' name='button' id='button' />
                </div>
            </form>
            <div>
                {input.name}
            </div>
            <div>

            </div>
        
        </div>
    )
    
    return (
        <main className={styleHome.Home}>
            <div className={styleHome.controls}>
                <button className={stylePage.button} onClick={alphaOrderRecipes}>a-z</button>   
                <button className={stylePage.button} onClick={reverseOrder}>z-a</button> 

                <h1 className={styleHome.title}>{recipesFinded[0].id === 'error'? recipesFinded[0].id: <p>Recetas encontradas</p> }</h1>
                <button className={stylePage.button} onClick={handleOnRefresh}>Borrar Busqueda</button>
                {<Page refresh={refresh} currentPage={currentPage} length={recipesFinded.length} />}
                <div className={styleHome.conteiner}>
                    {    
                    renderRecipes?.map((r, i) => (
                    <div key={i}> 
                            <PostRecipes id={r.id} name={r.name} summary={r.summary} healthScore={r.healthScore} image={r.image} diets={r.diets} steps={r.steps} />    
                        </div>
                    ))} 
                </div>
            </div>
        </main>
    )

}