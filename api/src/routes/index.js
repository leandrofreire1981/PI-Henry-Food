require('dotenv').config();

const { Recipe, Diet } = require('../db')
const  axios  = require('axios');
const { Router } = require('express');
const { api_key } = process.env
const { recipesRouter } = require('./routesFunctions/getRecipes.js')
const { idRecipesRouter } = require('./routesFunctions/getIdRecipes.js')
const { postRecipeRouter } = require('./routesFunctions/postRecipeRouter.js')
const { getDiets } = require('./routesFunctions/getDiets')
const { getRecipesDb } = require('./routesFunctions/getRecipeDb')


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// api key apiKey=77de3ab4cae247c18ad5b08274904546

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/recipes', recipesRouter)

router.get('/recipes/:idReceta', idRecipesRouter)

router.post('/post', postRecipeRouter)

router.get('/diets', getDiets)

router.get('/recipedb', getRecipesDb)

module.exports = router;



