const express = require('express');
const router = express.Router();

// Get all admissions for a user
router.get('/:userId', async (req, res) => {
  const db = req.app.locals.db;
  const admissions = await db.collection('admissions').find({ userId: req.params.userId }).toArray();
  res.json(admissions);
});

// Add new admission
router.post('/', async (req, res) => {
  const db = req.app.locals.db;
  const admission = req.body;
  await db.collection('admissions').insertOne(admission);
  res.json({ message: 'Admission submitted' });
});

module.exports = router;