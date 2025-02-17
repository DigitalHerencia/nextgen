import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const agentSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  avatar: { type: String },
  PP: { type: String },
  role: { type: String, required: true },
  commission_rate: { type: Number, required: true }
});

const Agent = mongoose.model('Agent', agentSchema);
export default Agent;