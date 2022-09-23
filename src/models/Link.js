import mongoose from "mongoose";

const linkSchema =  new mongoose.Schema(
  {
    id:{type:String},
    label:{type:String, required:true},
    url:{type:String, required:true},
    tag:{type:mongoose.Schema.Types.ObjectId, ref:'tags', required:true}
  }
)
const links = mongoose.model('links', linkSchema)

export default links