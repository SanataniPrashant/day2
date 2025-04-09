

import mongoose  from "mongoose";

const userSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    query:{
      type:String,
      required:true
    }

})

export default mongoose.models.insert || mongoose.model('queries',userSchema)

