// /api/new-meetup

import { MongoClient } from 'mongodb';

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        // What we are expecting in the request body below
        // const { title, image, address, description } = data;

        const client = await MongoClient.connect('mongodb+srv://connorkormos97:UEuUL3qk14xLxvza@meetups.79ky1ce.mongodb.net/?retryWrites=true&w=majority');
        const db = client.db();
        
        const meetupsCollection = db.collection('meetups');
          
        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({ message: 'Meetup inserted!' });
    }
}

export default handler;