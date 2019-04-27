const db = require('../db/database');

booSpaceService = {}

//--- GET ALL BOOSPACE DATA 
booSpaceService.getAll = () => {
    return db.any('SELECT * FROM booSpace')
}

//--- GET SPECIFIC DATA FROM ID 
booSpaceService.get = (id) => {
    return db.one('SELECT * FROM booSpace WHERE id = ${id} ', {id})
}

//--- POST BOOSPACE DATA 
booSpaceService.post = (toName, fromName, personalNote, img_url, title, horoscropeSign, date, description) => {
    return db.any('INSERT INTO booSpace (toName, fromName, personalNote, img_url, title, horoscropeSign, date, description) VALUES (${toName}, ${fromName}, ${personalNote}, ${img_url}, ${title}, ${horoscropeSign}, ${date}, ${description}) RETURNING id', {toName, fromName, personalNote, img_url, title, horoscropeSign, date, description})

}



module.exports = booSpaceService;