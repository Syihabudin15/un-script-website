import mongoose from "mongoose";
import { Messages } from "./Messages";
import { Chats } from "./Chats";
import { Reviews } from "./Reviews";

const uri = process.env.NEXT_PUBLIC_MONGO_URI || "";

mongoose.Promise = global.Promise;
mongoose.connect(uri).catch(err => console.log(err));

export { Messages, Chats, Reviews };