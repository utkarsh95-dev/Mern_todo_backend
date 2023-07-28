import mongoose from "mongoose";

const connectDB =()=>{


mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser:true });

mongoose.connection.on("connected", ()=>{
    console.log("DataBase Has Been connected!!");
})

mongoose.connection.on("disconnected", ()=>{
    console.log("DataBase Has Been Disconnected!!");
})

mongoose.connection.on("error", ()=>{
    console.log("There was an error connecting to the database", error.message);
})
}

export default connectDB;