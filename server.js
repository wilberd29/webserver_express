//const { response } = require('express')
const express = require('express')
const app = express()
const hbs=require('hbs');

require('./hbs/helpers')

const port=process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
//parciales HBS
hbs.registerPartials(__dirname + '/views/parciales')
//Express HBS engine
app.set('view engine', 'hbs');

//pagina Home
app.get('/', (req, res)=> {
    res.render('home', {
        nombre: 'YOBEL',
        anio: new Date().getFullYear()
    });
 });

 //pagina About
 app.get('/about', (req, res)=> {
    res.render('about', {
        anio: new Date().getFullYear()
    });
 });

 //helpers HBS


// app.get('/', function (req, res) {
//   res.send('Hello World')
//   let salida={
//             nombre: ' Fernando',
//             edad: 34,
//             url: req.url
//         };
//         response.send(salida);
// });


// app.get('/data', function (req, res) {
//      res.send('Hola Data');
//   });

app.listen(port, ()=>{
    console.log(`Escuchando peticiones en el puerto ${port}`);
}
);