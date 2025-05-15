import { error } from "console";
import mongoose, {Mongoose} from "mongoose";

const mongodbUrl = process.env.MONGODB_URL

interface MongooseConnection{
    conn : Mongoose | null;
    promise : Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

if(!cached)
{
    cached = (global as any).mongoose = {
        conn : null, promise : null
    }
}

export const connectToDataBase = async()=>{
    if(cached.conn)
        return cached.conn

    if(!mongodbUrl) 
        throw new Error("MONGODB_URL is missing!")

    cached.promise = cached.promise ||
    mongoose.connect(mongodbUrl, {dbName : "imagnify", bufferCommands : false})

    return cached.conn;
}