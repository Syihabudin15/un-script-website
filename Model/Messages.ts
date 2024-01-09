import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    message: {type: String, required: true}
});

export const Messages = mongoose.models.Messages || mongoose.model("Messages", schema);