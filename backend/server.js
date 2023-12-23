import express from 'express'
import cors from 'cors'
import mongodb from 'mongodb'

const app = express()
const port = process.env.PORT || 5000;
app.get('/', (req,res)=> {
    res.send('Welcome to my Library')
})
//middleware
app.use(cors())
app.use(express.json())

//mongodb configurations

const { MongoClient, ServerApiVersion } = mongodb
const uri = "mongodb+srv://e-library:15LTJMEeWxzawPlu@racheals-cluster.c4ckoip.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //create a collection of document

    const bookCollection = client.db("BookInventory").collections("books");
    
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.listen((port), () => {
    console.log(`App is Listening on port ${port}`)
})

//15LTJMEeWxzawPlu
