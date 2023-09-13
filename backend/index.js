const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = process.env.PORT  || process.env.SERVER_PORT;


app.use(cors());
app.use(express.json());



const uri = process.env.URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});



const run = async() => {
    
    try {
        const dataBase = client.db('Train-e-tickets');
        const trains = dataBase.collection('trains');
        const stations = dataBase.collection('stations');

        app.get('/trains', async(req, res) => {
            const result = await trains.find({}).toArray();
            res.send(result)
        })

        app.get('/', async(req, res) => {
            res.send('server is running well')
        })
        
    }
    finally {
        
    }

}
run().catch(err => {
    console.log(err);
})

app.listen(port, () => {
    console.log(`server runnig at ${port}`);
})