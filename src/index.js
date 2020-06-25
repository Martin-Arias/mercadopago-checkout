const express = require('express'); //Server
const exphbs = require('express-handlebars'); // Template engine
const path = require('path'); //Manejo de directorios



//Inicializaciones 
const app = express();


//////////////////////////////////////////////////////////////////Settings///////////////////////////////////////////////
app.set('views', path.join(__dirname,'views')) //Indica donde esta la carpeta views, para que hbs la encuentre

                ///Template engine settings///
app.engine('.hbs',exphbs({
    defaultLayout: 'main',
    partialsDir: path.join(app.get('views'), 'partials'), //Une la ubicacion de la carpeta views con la carpeta partials
    layoutsDir: path.join(app.get('views'), 'layouts'),
    extname: '.hbs' //Nombre de la extension de los archivos
}));
app.set('view engine','.hbs')

//////////////////////////////////////////Middleware/////////////////////////////////////////////////////////////////////////
app.use(express.urlencoded({extended:false}));
app.use(express.json());


////////////////////////////////////////////Rutas///////////////////////////////////
app.use(require('./routes/index'));  

//////////////////////////////////////////Static files/////////////////////////////////////
app.use(express.static(path.join(__dirname,'public'))) 

///////////////////////////////////////////Server Start///////////////////////////////////////////////////////////////////
app.listen(3000, () => {
    console.log('Funcionando en el puerto 3000');
    
})