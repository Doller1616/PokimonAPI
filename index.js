///https://pokemondb.net/pokedex/pichu
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.static(path.join(__dirname, 'dummyAPIS')));

app.get('/',(req,res)=>{
    res.redirect('https://pokimondummyapi.herokuapp.com/pokimon.json');
})

app.listen(PORT,()=> { 
  console.log("Server Started")
})