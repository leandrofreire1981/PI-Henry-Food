import { ALPHA_ORDER, CLEAN, GET_ALL_RECIPES, GET_DIETS, GET_RECIPE_BY_DB, GET_RECIPE_BY_ID, REVERSE_ALPHA_ORDER, SET_RECIPES_BY_NAME } from "./const"
import image from '../img/plato-base.jpg'


export function getAllRecipes() {

   return function(dispatch) {
        //fetch(`http://localhost:5000/recipes`)
        fetch('http://localhost:3003')
            .then(r => r.json())
            .then(r => {
                console.log('lo que llega', r)   
                dispatch({
                    type: GET_ALL_RECIPES,
                    payload: r
                }) }
            ).catch(e => {
                console.log('Hubo error: ', e)
            })
    }   
}

export function getRecipesByID(id) {

    return function(dispatch) {
         fetch(`http://localhost:5000/recipes/${id}`)
         //fetch(`http://localhost:3003/${id}`)
             .then(r => r.json())
             .then(r => {
                 console.log('lo que llega', r)   
                 dispatch({
                     type: GET_RECIPE_BY_ID,
                     payload: r
                 }) }
             ).catch(e => {
                 console.log('Hubo error: ', e)
             })
     }   
 } 

 export function setRecipeByName(array, dispatch){
    return dispatch({
        type: SET_RECIPES_BY_NAME,
        payload: [...array]
    })
 }

 export function getDiets(){

    return function(dispatch){
        fetch('http://localhost:5000/diets')
            .then(r => r.json())
            .then(r => {
                return dispatch({
                    type: GET_DIETS,
                    payload: r
                })
            }).catch(error => console.error('Error:', error))
    }
 }


export function postRecipe(recipe){
 fetch('http://localhost:5000/post', {
        method: 'POST',
        body: JSON.stringify(recipe),
        headers:{
            'Content-Type': 'application/json'
          }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
    alert('receta creada con exito')
    getRecipesFromDb()
}

export function getRecipesFromDb(){
    
    return function(dispatch){
        fetch('http://localhost:5000/recipedb')
                    .then(r => r.json())
                    .then(r => {
                        for (const iterator of r) {
                            iterator.image = image
                        }
                    dispatch({
                        type: GET_RECIPE_BY_DB,
                        payload: r
                        })
                    }).catch(error => console.error('Error:', error))
                }

}


export function alphaOrder(recipes){

    recipes.sort((a, b) => a.name.localeCompare(b.name));
    return {
        type: ALPHA_ORDER,
        payload: recipes
    }
}

export function reverseAlphaOrder(recipes){
    
    recipes.reverse((a, b) => a.name.localeCompare(b.name))
    return {
        type: REVERSE_ALPHA_ORDER,
        payload: recipes
    }
}

export function clreaState(){

    return {
        type: CLEAN
    }
}


 





        