import { MongoClient } from "mongodb";

const URI = "mongodb+srv://evtsg:database123@cluster0.jnpfn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotify-prototype");

const songCollection = await db.collection("songs").find({}).toArray();