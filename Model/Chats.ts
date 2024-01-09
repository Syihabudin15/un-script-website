import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    chatIP: {type: String, required: true},
    chats: [
        {
            role: {type: String, required: true},
            chat: {type: String, required: true},
            date: {type: Date, default: new Date()}
        }
    ],
    date: {type: Date, required: true, default: new Date()}
});

export const Chats = mongoose.models.Chats || mongoose.model("Chats", schema);