import mongoose from 'mongoose';
const { Schema } = mongoose;

const Post = new Schema({
    profile: {
        username: String,
        thumbnail: { type: String, default: '/static/images/default_thumbnail.png' }
    },
    title:{type:String, required:true},
    body:{type:String},
    createdAt: { type: Date, default: Date.now },
    updatedAt:{ type:Date }
});