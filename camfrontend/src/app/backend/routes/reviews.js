const express = require('express');
const router = express.Router();

// Get all reviews for a college
router.get('/:collegeId', async (req, res) => {
  const db = req.app.locals.db;
  const reviews = await db.collection('reviews').find({ collegeId: req.params.collegeId }).toArray();
  res.json(reviews);
});

// Add new review
router.post('/', async (req, res) => {
  const db = req.app.locals.db;
  const review = req.body;
  await db.collection('reviews').insertOne(review);
  res.json({ message: 'Review added' });
});

module.exports = router;