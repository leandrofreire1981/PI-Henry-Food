import { ALPHA_ORDER, CLEAN, GET_ALL_RECIPES, GET_DIETS, GET_RECIPE_BY_DB, GET_RECIPE_BY_ID, REVERSE_ALPHA_ORDER, SET_RECIPES_BY_NAME } from "../actions/const";
import img from '../img/plato-base.jpg'


const initialState = {
    recipesDb: [],
    diets : {},
    recipesFinded: [],
    recipes: [],
    recipe: {}
}

export default function rootReducer(state = initialState, action){

    switch (action.type) {
        case GET_ALL_RECIPES:
            let arr = []
            for (const i of action.payload) {
                arr.push({...i, created: false})
            }
            return {
                ...state, recipes: [...state.recipes, ...arr]
            }
        
        case SET_RECIPES_BY_NAME:
            return {
                ...state, recipesFinded: [...action.payload]
            }

        case GET_DIETS:
            return {
                ...state, diets: [...action.payload]
            }
            
        case GET_RECIPE_BY_DB:
            let array = []
            for (const i of action.payload) {
                array.push({
                    id: i.id,
                    name: i.name,
                    summary: i.summary,
                    healthScore: i.healthScore,
                    steps: i.steps,
                    created: i.created,
                    diets: i.diets.map(r => r.name),
                    image: img
                })
            }
            return {
                ...state, recipes: [...state.recipes, ...array]
            } 

        case ALPHA_ORDER:
            return {
                ...state, recipes: action.payload
            }
        
        case REVERSE_ALPHA_ORDER:
            return {
                ...state, recipes: action.payload
            }
            
        case GET_RECIPE_BY_ID:
            if(action.payload.created)  
                action.payload.image = img
            return {
                ...state, recipe: action.payload
            }

        case CLEAN:
            return {
                ...state, recipe: []
            }
        
    
        default:
            return state;
    }
    
}