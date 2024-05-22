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

app.post('/socks/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const result = await pool.query('SELECT uid FROM users WHERE username = $1 AND password = $2', [username, password]);
        if (result.rows.length > 0) {
            res.status(200).json({ uid: result.rows[0].uid });
        } else {
            res.status(401).json({ message: 'Authentication failed' });
        }
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