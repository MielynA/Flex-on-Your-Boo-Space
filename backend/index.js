const { app} = require('./app'); 


//---- RUNNING ENVI SERVER PORT 
app.listen(process.env.PORT || 5005)
console.log('port:',process.env.PORT || 5005 ,'is listening..'); 