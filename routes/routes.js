const express = require('express');
const RatingModel = require('../models/ratingModel');

const router = express.Router()

//Post Method
router.post('/post', async (req, res) => {
    const { rating, commentTitle, commentContent, userId } = req.body;
    const ratingData = new RatingModel({
        rating,
        commentTitle,
        commentContent,
        userId
    });
    try {
        await ratingData.save();
        res.send(ratingData);
    }
    catch (err) {
        res.send(err);
    }
}
)


//Get all Method
router.get('/getAll', (req, res) => {
    res.send('Get All API')
})

//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send(req.params.id)
})

//Update by ID Method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})

module.exports = router;