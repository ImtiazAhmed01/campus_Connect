const express = require('express');
const router = express.Router();

// Get user by id
router.get('/:id', async (req, res) => {
  const db = req.app.locals.db;
  const user = await db.collection('users').findOne({ uid: req.params.id });
  res.json(user);
});

// Add or update user
router.post('/', async (req, res) => {
  const db = req.app.locals.db;
  const user = req.body;
  await db.collection('users').updateOne(
    { uid: user.uid },
    { $set: user },
    { upsert: true }
  );
  res.json({ message: 'User saved' });
});

// Update user profile
router.put('/:id', async (req, res) => {
  const db = req.app.locals.db;
  const updates = req.body;
  await db.collection('users').updateOne(
    { uid: req.params.id },
    { $set: updates }
  );
  res.json({ message: 'User updated' });
});

module.exports = router; 