const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    groupName: {
        type: String,
        required: true,
        unique: false,
    },

    courseCode: {
        type: String,
        required: true,
        unique: false,
    },
    
    branch: {
        type: String,
        required: true,
        unique: false,
    },

    description: {
        type: String,
        required: true,
        unique: false,
    },

    startTime: {
        type: String,
        required: true,
        unique: false,
    },
    endTime: {
        type: String,
        required: true,
        unique: false,
    },
    meetingDays: {
        type: String,
        required: true,
        unique: false,
    },
    
    maxMembers: {
        type: Number,
        required: true,
        unique: false,
    },
    createdBy: {
        type: String,
        required: true,
        unique: false,
    },
    
})

module.exports = mongoose.model('Group', groupSchema);