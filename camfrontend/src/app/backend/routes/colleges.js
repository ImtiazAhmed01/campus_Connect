// const express = require('express');
// const router = express.Router();
// const { ObjectId } = require('mongodb');
// router.get('/', async (req, res) => {
//   const db = req.app.locals.db;
//   try {
//     const colleges = await db.collection('colleges').find().toArray();
//     res.json(colleges);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // GET /colleges/:id
// router.get('/:id', async (req, res) => {
//   const db = req.app.locals.db;
//   const { id } = req.params;

//   let query;
//   if (ObjectId.isValid(id)) {
//     query = { _id: new ObjectId(id) };
//   } else {
//     query = { _id: id };
//   }

//   try {
//     const college = await db.collection('colleges').findOne(query);
//     if (!college) return res.status(404).json({ message: 'College not found' });
//     res.json(college);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });