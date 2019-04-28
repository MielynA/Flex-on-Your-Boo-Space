const app = require('express').Router(); 
const booSpaceService = require('../services/booSpace_services');

//---- GET ALL BOOSPACE INFO 
app.get('/all', (req,res)=>{
    booSpaceService.getAll().then((data)=>{
        res.json({msg: 'Here are all the list of boospace', data})
    })
    .catch(err => {
        res.status(404).json({error: err.toString()})
    })
})



//---- GET SPECIFIC BOOSPACE INFO OF SPECIFIC ID 
app.get('/:id', (req,res)=>{
    const {id} = req.params;
    booSpaceService.get(id).then((data)=>{
        res.json({msg: data})
    })
    .catch(err => {
        res.status(404).json({error: err.toString()})
    })
})



//----- POST BOOSPACE DATA 
app.post('/', (req,res)=>{
    const {toName, fromName, personalNote, img_url, title, horoscropeSign, date, spaceDate, description} = req.body; 
    booSpaceService.post(toName, fromName, personalNote, img_url, title, horoscropeSign, date, spaceDate, description).then((data)=>{
        res.json({msg: 'New boo space has been created!' ,data})
    })
    .catch(err =>{
       res.status(404).json({error: err.toString()})
    })
})


module.exports = {booSpaceRoutes: app}