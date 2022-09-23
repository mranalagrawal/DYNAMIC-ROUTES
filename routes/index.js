var express = require('express');
const user = require('../models/userModel');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res)=> {
  res.render('index');
});
/* GET home page. */
router.get('/home',(req, res)=> {
  res.render('index');
});
/* GET contact page. */
router.get('/contactid',(req, res)=> {
  res.render('contact');
});

/* GET contact page. */
router.post('/contact',async(req, res)=> {
  user.create(req.body)
  .then(function(createduser){
    console.log(createduser);
    res.redirect("/");
  })
  .catch(function(err){
    res.send(err);
  });
})
  

/* GET service page. */
router.get('/serviceid', (req, res, next)=> {
  res.render('service');
});
/* GET gallery page. */
router.get('/gallery', (req, res)=> {
  res.render('gallery');
});
/* GET about page. */
router.get('/aboutid', (req, res) =>{
  res.render('about');
});


module.exports = router;
