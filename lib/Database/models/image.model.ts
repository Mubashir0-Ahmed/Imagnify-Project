import { Document, model, models, Schema } from "mongoose";

interface ImageProps extends Document{
  title: string;
  transformationType: string;
  publicId: string;
  securedUrl: string;
  width?: number;
  height?: number;
  config?: object;
  transformationUrl?: string;
  aspectRatio?: string;
  color?: string;
  prompt?: string;
  author?: string;
}


const ImageSchema = new Schema({
    title : {type : String, required : true}, 
    transformationType : {type : String, required : true}, 
    publicId : {type : String, required : true}, 
    securedUrl : {type : URL, required : true},
    width : {type : Number}, 
    height : {type : Number}, 
    config : {type : Object}, 
    transformationUrl : {type : URL},
    aspectRatio :  {type : String}, 
    color : {type : String}, 
    prompt : {type : String}, 
    author : { type: Schema.Types.ObjectId, ref : "User" }
})

const Image = models?.Image || model("Image", ImageSchema)

export default Image;