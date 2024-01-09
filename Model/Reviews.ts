import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
    orderId: {type: String, required: true},
    name: {type: String, required: true},
    univ: {type: String, required: false},
    body: {type: String, required: true},
    orderType: {type: String, required: true}
})

export const Reviews = mongoose.models.Reviews || mongoose.model("Reviews", schema);