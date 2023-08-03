const express = require('express');

const router = express.Router();

router.route("/").get((req,res)=>{
    res.status(200).json({message : 'Get all Contacts'});
})

router.route("/:id").get((req,res)=>{
    res.status(200).json({message : `Get contact details ${req.params.id}`});
})

router.route("/").post((req,res)=>{
    res.status(200).json({ message : 'Create Contacts' });
})

router.route("/:id").put((req,res)=>{
    res.status(200).json({ message : `Update contact details ${req.params.id}` });
})

router.route("/:id").delete((req,res)=>{
    res.status(200).json({ message : `Delete contacts details ${req.params.id}` })
})

module.exports = router;