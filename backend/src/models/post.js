import mongoose from 'mongoose';
const { Schema } = mongoose;

const Post = new Schema({
    id: {type:Number},
    title:{type:String, required:true},
    body:{type:String},
    profile: {
        username: String,
        thumbnail: { type: String, default: '/static/images/default_thumbnail.png' }
    },
    createdAt: { type: Date, default: Date.now },
    views:{type:Number, default:0 }
});

Post.statics.newPost = function({ title, body, profile }) {
    const post = new this({
        title,
        body,
        profile
    });
    return post.save();
};

