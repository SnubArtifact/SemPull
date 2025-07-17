const express = require('express');
const router = express.Router();

const Group = require('../models/group');



//POST/api/groupCreate

router.post('/create-group', async(req, res)=>{
    try {
        const newGroup = new Group({
            groupName: req.body.groupName,
            courseCode: req.body.courseCode,
            branch: req.body.branch,
            description: req.body.description,
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            meetingDays: req.body.meetingDays,
            maxMembers: req.body.maxMembers,
            createdBy: req.body.createdBy,
            
        });

        const savedGroup = await newGroup.save();
        res.status(200).json(savedGroup);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
})
module.exports = router;