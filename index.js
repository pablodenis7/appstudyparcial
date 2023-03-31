const bodyParser=require('body-parser')
const express = require('express')
const app = express();
app.use(bodyParser())
const userRoute = require("./src/route/users/users.route");        

//ruta raiz 
app.get('/', function (req, res) {
    //logica.
  res.send('Hello World');
});
app.get('/pagina2', function (req, res) {
    // logica de negocios
    // esta aqui - Controller
    res.json({ application: 'Study APP', version:'1.0.0'});
});
//Llamadas a los router de los UCs
userRoute(app);
app.listen(3000);
