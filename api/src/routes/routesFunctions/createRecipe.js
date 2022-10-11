const { Recipe, Diet } = require('../../db.js')

async function createRecipe(name, summary, healthScore, steps, diets){
    if(!name || !summary ) throw Error('Missing Parameters')
    
    let dietTypes = await Diet.findAll({
        where: {name: diets}
    })

    console.log('dieta de database: ', healthScore)
    
    let newRecipe = await Recipe.create({
        name, 
        summary, 
        healthScore, 
        steps 
      })


      
      newRecipe.addDiet(dietTypes);
      return newRecipe
    
   
} 

module.exports = {
    createRecipe
}