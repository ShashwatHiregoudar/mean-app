var express = require('express');
var router = express.Router();
const Contact = require('../models/contacts');
router.get('/contacts', (req, res, next)=>{
    Contact.find(function(err, contacts){
        res.json(contacts);
    })
    res.send('Retreiving the contact list');
});
router.post('/contact', (req,res,next)=>{
    let newContact = new Contact({
        firstname = req.body.firstname,
        lastname = req.body.lastname,
        phone = req.body.phone
    })
    newContact.save((err, contact)=>{
        if(err){
            res.json({msg: 'Failed to save add contact'});
        }
        else{
            res.json({msg: 'Succesfully saved contact'});
        }
    })
});

router.delete('/contact/:id', (req,res,next)=>{
    Contact.remove
});



module.exports = router;