require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId, ServerApiVersion } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function run() {
    try {
        await client.connect();
        const db = client.db('campusconnect');

        console.log("Connected to MongoDB");

        // -----------------------------
        // COLLEGES ROUTES
        // -----------------------------
        const colleges = db.collection('colleges');

        // GET all colleges
        app.get('/colleges', async (req, res) => {
            const all = await colleges.find().toArray();
            res.json(all);
        });

        // GET college by ID
        app.get('/colleges/:id', async (req, res) => {
            const { id } = req.params;
            if (!ObjectId.isValid(id)) return res.status(400).json({ error: "Invalid ID" });

            const college = await colleges.findOne({ _id: new ObjectId(id) });
            if (!college) return res.status(404).json({ error: "College not found" });

            res.json(college);
        });

        // POST new college
        app.post('/colleges', async (req, res) => {
            const { name, location } = req.body;
            if (!name || !location) return res.status(400).json({ error: "Name & location required" });

            const result = await colleges.insertOne({ name, location });
            res.status(201).json({ message: "College added", collegeId: result.insertedId });
        });

        // PUT update college
        app.put('/colleges/:id', async (req, res) => {
            const { id } = req.params;
            const { name, location } = req.body;
            if (!ObjectId.isValid(id)) return res.status(400).json({ error: "Invalid ID" });
            if (!name || !location) return res.status(400).json({ error: "Name & location required" });

            const result = await colleges.updateOne({ _id: new ObjectId(id) }, { $set: { name, location } });
            if (result.matchedCount === 0) return res.status(404).json({ error: "College not found" });

            res.json({ message: "College updated" });
        });

        // DELETE college
        app.delete('/colleges/:id', async (req, res) => {
            const { id } = req.params;
            if (!ObjectId.isValid(id)) return res.status(400).json({ error: "Invalid ID" });

            const result = await colleges.deleteOne({ _id: new ObjectId(id) });
            if (result.deletedCount === 0) return res.status(404).json({ error: "College not found" });

            res.json({ message: "College deleted" });
        });

        // Search colleges
        app.get('/colleges/search/:name', async (req, res) => {
            const { name } = req.params;
            const result = await colleges.find({ name: { $regex: name, $options: 'i' } }).toArray();
            res.json(result);
        });

        // -----------------------------
        // RESEARCH PAPERS
        // -----------------------------
        app.get('/research-papers', async (req, res) => {
            const papers = await db.collection('researchPaper').find().toArray();
            res.json(papers);
        });

        // -----------------------------
        // ADMISSIONS
        // -----------------------------
        const admissions = db.collection('admissions');

        app.get('/admissions', async (req, res) => {
            const all = await admissions.find().toArray();
            res.json(all);
        });

        app.post('/admissions', async (req, res) => {
            const { name, subject, email, phone, address, dob, selectedCollege } = req.body;
            if (!name || !subject || !email || !phone || !address || !dob || !selectedCollege) {
                return res.status(400).json({ message: "Fill all required fields" });
            }

            const result = await admissions.insertOne({ name, subject, email, phone, address, dob, selectedCollege, createdAt: new Date() });
            res.status(201).json({ message: "Admission submitted", id: result.insertedId });
        });

        // -----------------------------
        // REVIEWS
        // -----------------------------
        const reviews = db.collection('reviews');

        app.post('/reviews', async (req, res) => {
            const { admissionId, reviewText, rating } = req.body;
            if (!admissionId || !reviewText || !rating) {
                return res.status(400).json({ message: "All fields required" });
            }

            const result = await reviews.insertOne({ admissionId, reviewText, rating, createdAt: new Date() });
            res.status(201).json({ message: "Review added", id: result.insertedId });
        });

        // -----------------------------
        // SERVER START
        // -----------------------------
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });

    } finally {
        // client will stay connected while server runs
    }
}

run().catch(console.error);
