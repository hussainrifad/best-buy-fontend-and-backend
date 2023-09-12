const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT  || process.env.SERVER_PORT;


app.use(cors());
app.use(express.json());


const run =async () => {
    
    try {
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