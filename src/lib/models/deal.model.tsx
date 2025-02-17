// models/Deal.js
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const DealSchema = new Schema({
  talent: { type: Schema.Types.ObjectId, ref: 'Talent', required: true },
  agent: { type: Schema.Types.ObjectId, ref: 'Agent', required: true },
  brand: { type: String, required: true },
  offer_amount: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'accepted', 'declined', 'completed'], default: 'pending' }
}, { timestamps: true });

export default mongoose.model('Deal', DealSchema);
