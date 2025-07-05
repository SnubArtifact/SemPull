const express = require('express');
const router = express.Router();
const Group = require('../models/group');

router.get('/your-listings', async(req, res)=>{
    try {
        // For now, we'll need to pass the user email in query params
        // In a real app, this should come from session/token
        const { userEmail } = req.query;
        
        if (!userEmail) {
            return res.status(400).json({ error: 'User email is required' });
        }

        const groups = await Group.find({ createdBy: userEmail });
        console.log(`Found ${groups.length} groups for user: ${userEmail}`);
        res.status(200).json(groups);
    } catch (err) {
        console.error('Error fetching user groups:', err);
        res.status(500).json({error: err.message});
    }
});

module.exports = router;