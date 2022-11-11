const express = require('express');
//contected to moongodb
const mongoose= require('mongoose');
const user_route=require('./src/routes/user.route')
require('dotenv').config()

const app = express();
const port= process.env.PORT||3000;

app.listen(port,()=>console.log('Escuchando por el puerto ', port))

//conexion con las rutas
//rutas del proyecto
app.get('/', (req, res)=>{
    res.send('welcome to api')
    });
    

mongoose.connect(process.env.CONNECTION_URI)
.then(()=>console.log('Mongo DB connected '))
.catch((err)=>console.error(err))

//midlewares URI DE CONEXION PARA PROBAR LOS REQUEST(Get, Post, Delete, Put)
app.use(express.json());
//localhost:3000/home
app.get('/home',(req,res)=>console.log('Bienvenido '));
// localhost:3000/api/v1/people
app.use("/api/v1/people", user_route);

