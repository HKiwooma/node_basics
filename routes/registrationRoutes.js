const express = require("express");
const router = express.Router();
const registrationPost= require('../models/registrationPost')

// Routes
//register page route.
router.get("/", (req, res, next) => {
  res.render("index");
});

// a document instance
router.post("/", async (req, res) => {
  const myRegister = new registrationPost(req.body);
  // save data using scheme collection name 'Register' to database
  try{
    await myRegister.save();
    const items = await registrationPost.find()
    res.render("login", { users: items });
  }catch(error){
      res.status(400).send("unable to save to database");
    };
});

//search route
router.get('/search', async(req,res)=>{
  if (req.session.user) {
    console.log('req.session.user');
    try {
      //let allows for variable reassignments
      const items = await registrationPost.find()
      res.render("login", { users: items });
      if (req.) {
        
      }
    } catch (error) {
      
    }
    
  } else {
    res.redirect(login)
})

module.exports = router;
