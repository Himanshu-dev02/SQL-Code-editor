 const mongoose = require('mongoose');

/*  Attempt schema — logs each query a student submits.*/
const attemptSchema = new mongoose.Schema({
    userId: {
        type: String,
        default: 'anonymous', 
    },
    assignmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Assignment',
        required: true,
    },
    query: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Attempt', attemptSchema);
