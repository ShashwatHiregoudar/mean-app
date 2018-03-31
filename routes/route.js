var express = require('express');
var router = express.Router();
const Lawyer = require('../models/lawyers');

//retreive data
router.get('/lawyers', (req, res, next)=>{
    Lawyer.find(function(err, lawyers){
        res.json(lawyers);
    })
    res.send('Retreiving the lawyers-info list');
});


//add data
router.post('/lawyer', (req,res,next)=>{
    let newLawyer = new Lawyer({
        name : req.body.name,
        type : req.body.type,
        phone : req.body.phone,
        slot:{
            date : req.body.slot.date,
            time : req.body.slot.time,
        }
    })
    console.log('\nname = '+req.body.name);    
    console.log('type = '+req.body.type);
    console.log('phone = '+req.body.phone);
    console.log('date = '+req.body.slot.date);
    console.log('time = '+req.body.slot.time);


    newLawyer.save((err, Lawyer)=>{
        if(err){
            console.log(err);
            res.json({msg: 'Failed to save add lawyer'});
        }
        else{
            res.json({msg: 'Succesfully saved lawyer'});
        }
    })
});

//delete lawyer
router.delete('/lawyer/:id', (req,res,next)=>{
    Lawyer.remove({_id:req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })
});



module.exports = router;