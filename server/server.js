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

// Variables to store user information on the server after logging in
let UserID = ""
let UserJobRole = ""

// Get request to fetch employees from MongoDB
app.get('/api/employees', async (req, res) => {
    try {
        const result = await employeeCollection.find({}).toArray();
        // anonymize salary for unauthorized people
        for (let i = 0; i < result.length; i++) {
            //console.log(result[i].employee_id)
            if(UserJobRole !== 'HR'){
                if(UserID !== result[i].employee_id && UserID !== result[i].manager_id){
                    result[i].salary = "******"
                    //console.log(result[i].salary)
                }
            }
        }
        res.json(result);
        // console.log(result[1])
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
            //res.json("User does not exist")
            return res.status(401).json({ message: 'User does not exist'});
        }
        else if (password !== user.password){
            //res.json("Wrong Credential")
            return res.status(401).json({ message: 'Wrong Credential'})
        } else {
            UserID = user.employee_id;
            UserJobRole = user.job_role;
            console.log(UserID)
            res.json(user);
            
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