const express = require('express'); 
const mongoose =require('mongoose');      
const cors = require('cors');              
const bodyParser = require('body-parser');  
const fetchRecipeData =require('./Controllers/fetchRecipeData');
const handleRegister = require('./Controllers/Register');
const handleLogin = require('./Controllers/Login');

require('dotenv').config();


const app = express();                      
const port =  4000; 
const url = 'mongodb://localhost:27017/MasterDb'



app.use(cors());                            
app.use(bodyParser.json());  



try {
  const connect = mongoose.connect(url)

  if (connect) {
    console.log('message : Dbconnected ')
  }
}catch(error)
{
console.log (error)
}








app.get('/api/fetch/recipes', fetchRecipeData);
app.post('/api/register', handleRegister);
app.post('/api/login', handleLogin)


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});






