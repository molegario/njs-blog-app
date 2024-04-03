import { connectToDB, inserDocumentToCollection } from "../../../helpers/db-util";

export default async function handler(req, res) {

  if(req.method === 'POST') {
    const {
      email,
      name,
      message
    } = req.body;

    //validation
    if(
      !email ||
      !email.includes('@') ||
      !name ||
      !message ||
      !message.trim() === ''
    ) {
      res.status(422).json({
        message: `Invalid inputs given. Please adjust your values and try again.`
      });
      return;
    }

    const newMessage = {
      email,
      name,
      message
    };

    let client;

    try {
      client = await connectToDB('contacts');
    } catch(err) {
      res.status(500).json({
        message: 'Could not connect to DB'
      });
      return;
    }

    let resp;
    try {
      resp = await inserDocumentToCollection(client, 'messages', newMessage);
    } catch(err) {
      res.status(500).json({
        message: err.message ?? 'Could not insert new record to DB'
      });
      client.close();
      return;
    }

    // await new Promise((resolve, reject) => setTimeout(() => resolve(), 5000)); // testing delay

    res.status(201).json({
      message: 'Successfully inserted message to DB',
      insertedId: resp.insertedId,
      message: newMessage
    });
  } else {
    res.status(200).json({
      message: 'no valid request to process.',
    });
  }
}