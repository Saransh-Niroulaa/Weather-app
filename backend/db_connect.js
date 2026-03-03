import { MongoClient } from "mongodb";

const uri = 'mongodb+srv://saranshniroula1327:1327@college.h5m5rbw.mongodb.net/?retryWrites=true&w=majority&appName=College'
const client = new MongoClient(uri);
async function connectDB(){
    
    await client.connect();
    console.log("Connected to MongoDB");
    const db = client.db('colloge_db');
    const collection = db.collection('student_data');

    // await collection.insertOne({ 
    //     name: "John Doe", 
    //     age: 25  
    // });
    // const students = [
    //     { name: "John Doe", age: 25 },
    //     { name: "Jane Smith", age: 30 },
    //     { name: "Alice Johnson", age: 22 },
    //     { name: "Bob Brown", age: 28 }
    // ];
    // collection.insertMany(students)
    // console.log("Data inserted successfully");
    // const user = await collection.find({}).toArray();
    // console.log(user);
    // console.log(`Data fetched successfully`);
    // await collection.deleteOne({ name: "John Doe" });
    // console.log("Data deleted successfully");
    // const user = await collection.find({}).toArray();
    // console.log(user);
    await collection.updateOne(
        { name: "John Doe" },
        { $set: { name: "saransh" } }
    );
    console.log("Data updated successfully");
    const user = await collection.find({}).toArray();
    console.log(user);


}
connectDB();