require('dotenv').config();
const { Recipe, Diet } = require('../../db')

async function getRecipesDb(req, res){

    try{
        let recipes = await Recipe.findAll({
            include: {
                model: Diet,
                attributes: ['name'],
                through: {
                    attributes: {}
                }
            }
        })
        console.log('recetas: ', recipes)
        res.status(200).json(recipes)
    }catch(e){
        res.status(404).json({err: 'not finded'})
    }

}

module.exports = {
    getRecipesDb
}