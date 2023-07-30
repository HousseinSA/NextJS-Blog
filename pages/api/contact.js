import {MongoClient} from "mongodb"
async function handler(req, res) {
  const connectURL = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_closter}.p6liy3s.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`
  const client = await MongoClient.connect(connectURL)
  const db = client.db()
  const messageCollection = db.collection("messages")

  if (req.method === "POST") {
    const {name, email, message} = req.body
    const userMessage = {
      name,
      email,
      message,
    }
    try {
      await messageCollection.insertOne(userMessage)
      res.status(201).json({message: "Sent!"})
    } catch (error) {
      res.status(505).json({message: "error sending message"})
    }
  } else {
    res.status(200).json({message: "working find baby"})
  }
}
export default handler
