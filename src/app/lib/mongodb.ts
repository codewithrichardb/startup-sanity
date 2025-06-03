import MongoClient from 'mongodb'

const uri = process.env.DATABASE_URL

const options = {}

let client;
let clientPromise;

if(!process.env.DATABASE_URL){
    throw new Error("Please add your mongo URI to .env")
}

if(!global._mongoClientPromise){
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect() 
}

export default global._mongoClientPromise;