
const express=require('express')
const app=express();
app.get("/",function(request,response){
    return response.send("hello world!");
});
app.get("/etudiant/:firstname",function(request,response){
    return response.send(`le nom de l etudiant est${request.params.firstname} `);
});
app.get("/product/:id",function(request,response){
    console.log(request.params.id)
    return  response.send(`le code de produit est ${request.params.id} `);
});

app.post('/',function(request,response){
   return response.send('khali')
})

app.listen(3000,function(){
    console.log("the server is running on port 3000");
});