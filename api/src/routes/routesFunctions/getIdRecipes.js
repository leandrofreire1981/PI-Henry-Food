require('dotenv').config();
const { Recipe, Diet } = require('../../db')
const  axios  = require('axios');
const { api_key1, api_key2, api_key3, api_key4 } = process.env


async function idRecipesRouter(req, res, next){
    const  id  = req.params.idReceta
    let recipe 
    try {
    if(id.length<30) {
        recipe = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${api_key1}`)
        //recipe =  await axios(`http://localhost:3003/${id}`)
        recipe = recipe.data
    }
     else{
           recipe = await Recipe.findByPk(id, {
                include: {
                    model: Diet,
                    attributes: ['name'],
                    through: {
                        attributes: {}
                    }
                }
            })  
        }        
            
 
        console.log('receta de api: ', id.length)
        res.status(200).json(recipe)
    }catch (e) {
        next(e)
    }
}

module.exports = {
    idRecipesRouter
}