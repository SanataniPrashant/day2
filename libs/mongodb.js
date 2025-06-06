import mongoose from "mongoose";

const MONGODB_URI = 'mongodb://127.0.0.1:27017/NEXTJS';

let cached =global.mongoose;

if(!cached){
  cached=global.mongoose={conn:null,Promise:null};
  
}

async function dbConnect(){
  if(cached.conn){
    return cached.conn
  }

  if(!cached.promise){
    cached.promise=mongoose.connect(MONGODB_URI).then((mongoose)=>{
      return mongoose
    })
  }
  cached.conn=await cached.promise
  return cached.conn
}

export default dbConnect

