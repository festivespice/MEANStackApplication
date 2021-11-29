const express = require('express');
const router = express.Router();

//42:56
const Contact = require('../models/contacts.js')

//retrieving data
router.get('/contacts', function(req, res, next){
  Contact.find(function(err, contacts){ //when we get a contact, it will be in the contacts list which we send as a json.
    res.json(contacts); //sent to client, if contacts exists.
  });
});

//adding data
router.post('/contact', function(req, res, next){
  let newContact = new Contact({ //fill out the object, body parser
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    phone: req.body.phone
  });

  newContact.save(function(err, contact){
    if(err){
      res.json({msg: 'Failed to add contact'});
    }
    else{
      res.json({msg: 'Contact added'});
    }
  });
});
//deleting contanct
//An ID is created for each contact in MongoDB.
router.delete('/contact/:id', function(req, res, next){
  Contact.remove({_id: req.params.id}, function(err, result){
    if(err){
      res.json(err);
    }
    else {
      res.json(result);
    }
  });
});


//when you are creating a route, you need to expose
//your router as well.
module.exports = router; //It'll find nodemon with this.
