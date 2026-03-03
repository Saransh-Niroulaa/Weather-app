import mongoose from 'mongoose';

const uri = 'mongodb+srv://saranshniroula1327:1327@college.h5m5rbw.mongodb.net/?retryWrites=true&w=majority&appName=College'
mongoose.connect(uri).then(console.log("Connected to MongoDB"))

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    rollno: Number,
    course: String,
});

const User = mongoose.model('User', userSchema);

const newUser = new User({
    name: "saransh niroula",
    email: "saranshniroula@gmail.com",
    rollno: 58,
    course: "Btech",
});

// newUser.save().then(() => console.log("User saved to MongoDB"));

// User.find().then(users => console.log(users)).catch(err => console.error(err));

// // console.log(`User before save: ${User}`);
// // User.updateOne({email: "saranshniroula@gmail.com"}, {rollno: 59})
// //     .then(() => console.log(`User after update ${User} `))
// //     .catch(err => console.error(err));

// User.deleteOne({ email: "saranshniroula@gmail.com" })
//     .then(() => console.log("User deleted successfully"))
    // .catch(err => console.error(err));
console.log(User.find)