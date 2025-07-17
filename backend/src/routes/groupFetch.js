const express = require('express');
const router = express.Router();

const Group = require('../models/group');

//GET/api/groupFetch


router.get('/', async(req, res)=>{
    try {
        const groups = await Group.find();
        res.status(200).json(groups);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

module.exports = router;