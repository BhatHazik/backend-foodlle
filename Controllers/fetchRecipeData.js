const axios = require('axios')


const fetchRecipe = async (params) => {
    try {
      const options = {
        method: 'GET',
        url: `https://food-recipes-with-images.p.rapidapi.com/?q=${params}`,
        headers: {
          'X-RapidAPI-Key': '1d400225acmsh735dbb397c91715p1b8229jsnce0e352b82ea',
          'X-RapidAPI-Host': 'food-recipes-with-images.p.rapidapi.com',
        },
      };
      const response = await axios.request(options);
      return response.data;
    }
  
    catch (error) {
      console.error(error);
      throw error;
    }
  };
  

  
  const fetchRecipeData = async (req, res) => {
    try {
      
      const params = req.query.q;
      if (params){
        const recipeData = await fetchRecipe(params);
        // console.log(recipeData)
        res.json(recipeData);
    
      }

      else{
        res.json({message: 'no query passed'})
      }
        
        
      
     
      
  
  
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  
  
  
  module.exports = fetchRecipeData;