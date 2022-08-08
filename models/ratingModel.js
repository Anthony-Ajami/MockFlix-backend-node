const mongoose = require('mongoose');

const RatingModel = new mongoose.Schema({
    rating: {
        type: Number,
    },
    commentTitle: {
        type: String,
    },
    commentContent: {
        type: String,
    },
    userId: {
        type: String,
    }
});

module.exports = mongoose.model('Rating', RatingModel);