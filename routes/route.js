const express = require('express');
const router = express.Router();
const Lawyer = require('../models/lawyers');

//retreive data
router.get('/lawyers_get', (req, res, next)=>{
    Lawyer.find(function(err, lawyers){
        res.json(lawyers);
    })
});


//add data
router.post('/lawyer_add', (req,res,next)=>{
    let newLawyer = new Lawyer({
        name : req.body.name, 
        type : req.body.type,
        phone : req.body.phone,
        slotdate : req.body.slotdate,
        slottime : req.body.slottime,
    })
    console.log('\nname = '+req.body.name);    
    console.log('type = '+req.body.type);
    console.log('phone = '+req.body.phone);
    console.log('slotdate = '+req.body.slotdate);
    console.log('slottime = '+req.body.slottime);
    newLawyer.save((err, Lawyer)=>{
        if(err){
            //console.log(err);
            res.json({msg: 'Failed to add lawyer'});
        }
        else{
            res.json({msg: 'Succesfully saved lawyer'});
        }
    });
});

//delete lawyer
router.delete('/lawyer_delete/:id', (req,res,next)=>{
    Lawyer.remove({_id:req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })
});



module.exports = router;