const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/places', (req, res, next) => {
  Place.find()
  .then(places=>{
  res.render('places', {places})
  })
  .catch(err=>{
    res.send(err)
  })
})

router.post('/places', (req, res, next)=> {
  Place.create()
    .then ( character => {
      console.log(character)
    })
    .catch(error => {
      console.log("The error is:", error)
    })
  
router.delete(`/places/${deletePlace}`)
          .then (Place => {
          })
          .catch(error => {
            console.log("The error is:", error)
          })

        
module.exports = router;
