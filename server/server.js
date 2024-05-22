import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const url = process.env.MONGO_DB_URL;
const dbName = process.env.MONGO_DB;

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3000;

// Connect to db in mongo
const client = await MongoClient.connect(url);
const db = client.db(dbName);
const employeeCollection = db.collection(process.env.MONGO_DB_COLLECTION_EMPLOYEES);

// Get request to fetch employees from MongoDB
app.get('/api/employees', async (req, res) => {
    try {
        const result = await employeeCollection.find({}).toArray();
        res.json(result);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Hmmm, something smells... No bananas for you! ☹");
    }
});

app.post('/api/employees/login', async (req, res) => {
    const { username, password } = req.body;
    console.log("BODY", req.body)
    try {
        const user = await employeeCollection.findOne({username: username})
        console.log(user)
        if(!user){
            return res.status(401).send("User does not exist");
        }

        if(password !== user.password){
            return res.status(401).send("Wrong Credential")
        }
        res.json(user);

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);

    process.on('SIGINT', () => {
        client.close();
        console.log('Connection is closing...');
        process.exit(0);
    })
});