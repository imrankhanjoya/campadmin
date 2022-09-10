import { MongoClient } from 'mongodb'

const url = "mongodb+srv://akramjoya:SimplySocial!123@cluster0.cl6q6ca.mongodb.net/"
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

let client
let clientPromise

client = new MongoClient(url, options)
clientPromise = client.connect()


export default  async function  handler(req, res) {


  const clientconnected = await clientPromise;
  const db = clientconnected.db("infulancer");
  let brandlist
  
    brandlist = await db.collection("brands").find({}).toArray();


  res.status(200).json({data:brandlist})



  
}


