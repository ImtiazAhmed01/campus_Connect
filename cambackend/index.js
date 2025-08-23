require('dotenv').config();
const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();

// middle ware
app.use(express.json());
app.use(cors());
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
}));

app.get('/', (req, res) => {
    res.send('server is running')
});


const uri = `mongodb+srv://${process.env.DB_user}:${process.env.DB_pass}@cluster0.khtuk.mongodb.net/?retryWrites=true&w=majority`;


const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect(); // ensure connection
        const db = client.db('campusconnect');
        // const campaignData = client.db('campaingDB').collection('campaigns')
        // const donationDB = client.db('campaingDB').collection('donationCollection')

        // Routes

        // 1. Create a new college (POST)
        app.post('/colleges', async (req, res) => {
            try {
                const college = req.body;

                // Simple validation
                if (!college.name || !college.location) {
                    return res.status(400).json({ error: "College name and location are required" });
                }

                const result = await db.collection('colleges').insertOne(college);
                res.status(201).json({
                    message: "College added successfully",
                    collegeId: result.insertedId
                });
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: "Failed to add college" });
            }
        });

        // 2. Get all colleges (GET)
        app.get('/colleges', async (req, res) => {
            try {
                const colleges = await db.collection('colleges').find().toArray();
                res.json(colleges);
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: "Failed to fetch colleges" });
            }
        });

        // 3. Get a single college by ID (GET)
        app.get('/colleges/:id', async (req, res) => {
            try {
                const { id } = req.params;

                let query;
                if (ObjectId.isValid(id)) {
                    query = { _id: new ObjectId(id) };
                } else {
                    query = { _id: id }; // if stored as string
                }

                const college = await db.collection('colleges').findOne(query);

                if (!college) {
                    return res.status(404).json({ error: "College not found" });
                }

                res.json(college);
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: "Failed to fetch college" });
            }
        });

        // app.get('/colleges/:id', async (req, res) => {
        //     const db = req.app.locals.db;
        //     const { id } = req.params;

        //     let query;
        //     if (ObjectId.isValid(id)) {
        //         query = { _id: new ObjectId(id) };
        //     } else {
        //         query = { _id: id };
        //     }

        //     const college = await db.collection('colleges').findOne(query);

        //     if (!college) {
        //         return res.status(404).json({ message: 'College not found' });
        //     }

        //     res.json(college);
        // });

        // 4. Update a college (PUT)
        app.put('/colleges/:id', async (req, res) => {
            try {
                const collegeId = req.params.id;
                const updatedData = req.body;

                // Simple validation
                if (!updatedData.name || !updatedData.location) {
                    return res.status(400).json({ error: "College name and location are required" });
                }

                const result = await db.collection('colleges').updateOne(
                    { _id: new ObjectId(collegeId) },
                    { $set: updatedData }
                );

                if (result.matchedCount === 0) {
                    return res.status(404).json({ error: "College not found" });
                }

                res.json({ message: "College updated successfully" });
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: "Failed to update college" });
            }
        });

        // 5. Delete a college (DELETE)
        app.delete('/colleges/:id', async (req, res) => {
            try {
                const collegeId = req.params.id;
                const result = await db.collection('colleges').deleteOne({
                    _id: new ObjectId(collegeId)
                });

                if (result.deletedCount === 0) {
                    return res.status(404).json({ error: "College not found" });
                }

                res.json({ message: "College deleted successfully" });
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: "Failed to delete college" });
            }
        });

        // 6. Search colleges by name (GET)
        app.get('/colleges/search/:name', async (req, res) => {
            try {
                const name = req.params.name;
                const colleges = await db.collection('colleges')
                    .find({ name: { $regex: name, $options: 'i' } })
                    .toArray();

                res.json(colleges);
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: "Failed to search colleges" });
            }
        });
        app.get("/research-papers", async (req, res) => {
            try {
                const papers = await db.collection("researchPaper").find({}).toArray();
                res.json(papers);
            } catch (err) {
                console.error(err);
                res.status(500).json({ error: "Server error" });
            }
        });
        app.post("/admissions", async (req, res) => {
            try {
                const { name, subject, email, phone, address, dob, selectedCollege } = req.body;

                // Validate required fields
                if (!name || !subject || !email || !phone || !address || !dob || !selectedCollege) {
                    return res.status(400).json({ message: "Please fill all required fields" });
                }

                const admission = {
                    name,
                    subject,
                    email,
                    phone,
                    address,
                    dob,
                    selectedCollege,
                    createdAt: new Date(),
                };

                const result = await db.collection("admissions").insertOne(admission);

                res.status(201).json({ message: "Admission submitted successfully", id: result.insertedId });
            } catch (err) {
                console.error(err);
                res.status(500).json({ message: "Server error" });
            }
        });

        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();
        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);




app.listen(port, () => {
    console.log(`server is running on ${port}`)
})