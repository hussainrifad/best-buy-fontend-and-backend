const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const jwt = require('jsonwebtoken');

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

function verifyJwt(req, res, next){
    const authHeader = req.header.authorization;
    if(!authHeader){
        return res.status(403).send({accessToken : 'unauthorized access'})
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN, function(err, decoded){
        if(err){
            return res.status(403).send({accessToken : 'unauthorized access'})
        }
        req.decoded = decoded;
        next();
    })
}


const run = async() => {
    
    try {
        const productsDataBase = client.db('ema-john-ecomerce');
        const bestBuyDataBase = client.db('Best-Buy');

        const products = productsDataBase.collection('products');
        const users = bestBuyDataBase.collection('users');

        app.get('/products', async(req, res) => {
            const allProducts = await products.find({}).toArray();
            res.send(allProducts);
        })

        // get all the popular products from DataBase 

        app.get('/popular-products', async(req, res) => {
            const query = {ratingsCount: {$gte : 4000}}
            const popularProducts = await products.find(query).toArray();
            const length = popularProducts.length;
            res.send({popularProducts, length});
        })

        // route to get jwt token 
        
        app.get('/jwt', async(req, res) => {
            const email = req.query.email;
            const userExist = await users.findOne({email : email});

            if(!userExist) {
                return res.status(403).send({accessToken : 'user not authorized'})
            }

            const token = jwt.sign({email}, process.env.ACCESS_TOKEN, {expiresIn: '1h'});
            res.send({accessToken : token});
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