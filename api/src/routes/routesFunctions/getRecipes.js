require('dotenv').config();


const  axios  = require('axios');
const { api_key1 } = process.env


async function recipesRouter(req, res, next) {
    const { name } = req.query
    let data
    try {

        if(!name){
          console.log('no tiene')
           const recipes = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${api_key1}&addRecipeInformation=true&number=100`)
   //const recipes = await axios(`http://localhost:3003`) // resultados del archivo ../respuestas de api/api.js
            data = await recipes.data.results.map((e) => {
                return {
                  id: e.id,
                  name: e.title,
                  summary: e.summary,
                  healthScore: e.healthScore,
                  image: e.image,
                  diets: e.diets,
                  steps: e.analyzedInstructions[0]?.steps.map((e) => {
                    return {
                      number: e.number,
                      step: e.step,
                      ingredients: e.ingredients,
                    };
                  }),
                };
              });
        }
        else{
          const recipes = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${name}&apiKey=${api_key1}&addRecipeInformation=true`)
         //const recipes = await axios(`http://localhost:3003/${name}`) // resultados del archivo ../respuestas de api/api.js
          data = await recipes.data.results.map((e) => {
              return {
                id: e.id,
                name: e.title,
                summary: e.summary,
                healthScore: e.healthScore,
                image: e.image,
                diets: e.diets,
                steps: e.analyzedInstructions[0]?.steps.map((e) => {
                  return {
                    number: e.number,
                    step: e.step,
                    ingredients: e.ingredients,
                  };
                }),
              };
            });
        }
      
    res.status(200).json(data)
    }
    catch(e) {
        next(e)
    }
}


module.exports = {
    recipesRouter
}