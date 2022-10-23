require('dotenv').config();
const { Recipe, Diet } = require('../../db')


async function getDiets(req, res){

    try{
        let diets = await Diet.findAll()
        console.log('diest: ',  diets)
        res.status(200).json(diets)
     }catch(e){
         res.status(404).json({err: 'not finded'})
     }

}

module.exports = {
    getDiets
}