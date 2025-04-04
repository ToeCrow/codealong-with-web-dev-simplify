const express = require('express')
const router = express.Router()

//Get all subscribers
router.get('/', (req, res) => {
  res.send('Get all subscribers')
})
//Get a single subscriber
router.get('/:id', (req, res) => {
  
})

//Create a subscriber
router.post('/', (req, res) => {
  
})

//Update a subscriber
router.patch('/:id', (req, res) => {
  
})

//Delete a subscriber
router.delete('/:id', (req, res) => {
  
})


module.exports = router