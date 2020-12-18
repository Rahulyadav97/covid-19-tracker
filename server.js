const express = require("express");

const app = express();

var handlebars =require("express-handlebars").create({defaultLayout:"main"})
 const api = require("novelcovid");

 app.engine("handlebars",handlebars.engine);
 app.set("view engine","handlebars");
//  api.all().then(response=>{
//      console.log(response);
//  })
app.get("/",(req,res)=>
{
   
    api.countries().then(response=>{
        console.log(response);
        res.render("home",{ info:response});
          })

})
const PORT = process.env.PORT || 5000
 app.listen(PORT,()=>{
     console.log("Listening on 5000");
 })
 
