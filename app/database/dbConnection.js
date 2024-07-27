import { MongoClient } from 'mongodb'

// Connection URL
// const url = 'mongodb://localhost:27017';
const url = 'mongodb://0.0.0.0:27017';
const client = new MongoClient(url);

client.connect()
    .then(console.log('Connected successfully to server'))
    .catch(err => { console.log('Error: ', err) })

// Database Name
const dbName = 'assignment_7';
export const db = client.db(dbName);