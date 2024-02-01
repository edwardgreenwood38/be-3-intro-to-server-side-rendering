const express = require('express');
const breads = express.Router();
const Bread = require('../models/bread.js');


// INDEX
breads.get('/', (req, res) => {
    Bread.find()
      .then(foundBreads => {
        res.render('index',
        {
            breads: foundBreads,
            title: 'Index Page'
        });
      })
    
    //res.send(Bread);
});

// NEW
breads.get('/new', (req, res) => {
    res.render('new')
})


// EDIT
breads.get('/:indexArray/edit', (req, res) => {
  res.render('edit', {
    bread: Bread[req.params.indexArray],
    index: req.params.indexArray
  })
})


// SHOW
breads.get('/:id', (req, res) => {
    // console.log('id: ' + req.params.id);
    Bread.findById(req.params.id)
      .then(foundBread => {
        res.render('show', {
          bread: foundBread
        })
      })
      .catch(err => {
        res.render('error404')
      })
  });


// CREATE
breads.post('/', (req, res) => {
  if (!req.body.image) {
    req.body.image = undefined
  }
  
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }

  Bread.create(req.body)
  res.redirect('/breads')
});


// UPDATE
breads.put('/:arrayIndex', (req, res) => {
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread[req.params.arrayIndex] = req.body
  res.redirect(`/breads/${req.params.arrayIndex}`)
})



// DELETE
breads.delete('/:id', (req, res) => {
  //Bread.splice(req.params.indexArray, 1)
  Bread.findByIdAndDelete(req.params.id)
    .then(deleteBread => {
      res.status(303).redirect('/breads')
    })
})

  


module.exports = breads
