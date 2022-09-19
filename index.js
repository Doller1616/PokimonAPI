///https://pokemondb.net/pokedex/pichu
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
const BASEURL = PORT == 5000 ? "http://localhost:5000" : "https://pokimondummyapi.herokuapp.com";


app.get('/',(req,res)=>{
    res.send({
      pokemon : `${BASEURL}/pokemon.json`,
      cricket : `${BASEURL}/cricket-opta.json`
    })
})

app.get('/flags',(req,res)=>{

  fs.readdir(path.join(__dirname, 'public/flags'), (err, files) => {
    if (err)
      console.log(err);
    else {
      const flagsUrl = files.reduce((acc,file) => { 
        const key = file.split('.')[0];
        return { ...acc, [key] :`${BASEURL}/${file}`}
      },{})
      res.send(flagsUrl);
    }
  })
  
})

app.listen(PORT,()=> { 
  console.log("Server Started")
})