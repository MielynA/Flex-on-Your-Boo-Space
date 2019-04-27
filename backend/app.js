//---- NPM PACKAGES MODULES 
const app = require('express')();
const bodyParser = require('body-parser'); 
const cors = require('cors'); 


//--- PATH ROUTER MODULES 
const {booSpaceRoutes} = require ('./routes/booSpace')



//--- MIDDLEWARE 
app.unsubscribe(cors()); 
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())


app.use('/booSpace', booSpaceRoutes)

module.exports = {app}