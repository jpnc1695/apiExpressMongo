import mongoose from "mongoose";

const tagSchema = new mongoose.Schema(
  {
    id:{type:String},
    valor:{type:String, required: true}
  },
  {
    versionKey:false
  }
)

const tags = mongoose.model('tags', tagSchema)

export default tags;
