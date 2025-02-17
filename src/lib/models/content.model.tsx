// models/Content.js
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ContentSchema = new Schema({
  talent: { type: Schema.Types.ObjectId, ref: 'Talent', required: true },
  type: { type: String, enum: ['photo', 'video'], required: true },
  engagement: { type: Number, default: 0 },
  // Linked to a campaign (if applicable)
  campaign: { type: Schema.Types.ObjectId, ref: 'Campaign' }
}, { timestamps: true });

export default mongoose.model('Content', ContentSchema);
