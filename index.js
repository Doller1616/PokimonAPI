///https://pokemondb.net/pokedex/pichu
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.static(path.join(__dirname, 'dummyAPIS')));
const BASEURL = PORT == 5000 ? "http://localhost:5000" : "https://pokimondummyapi.herokuapp.com";


app.get('/',(req,res)=>{

    res.send({
      pokemon : `${BASEURL}/pokemon.json`,
      cricket : `${BASEURL}/cricket-opta.json`
    })
})

app.listen(PORT,()=> { 
  console.log("Server Started")
})