const { Recipe, Diet } = require('../../db.js')
const { createRecipe } = require('./createRecipe.js')

async function postRecipeRouter(req, res, next){
     const { name, summary, healthScore, step, diet } = req.body
    try {
        res.status(200).json(await createRecipe(name, summary, healthScore, step, diet))
    }catch(e) {
        next(e)
    } 
  

    console.log('body: ', req.body)
} 


module.exports = {
    postRecipeRouter
}