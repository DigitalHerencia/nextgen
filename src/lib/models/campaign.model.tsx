// models/Campaign.js
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CampaignSchema = new Schema({
  title: { type: String, required: true },
  budget: { type: Number, required: true },
  metrics: { type: Map, of: Number },
  performance_data: { type: Map, of: String },
  // This field can reference a Marketing Director user if you build a User model:
  marketingDirector: { type: Schema.Types.ObjectId, ref: 'User' },
  talent: { type: Schema.Types.ObjectId, ref: 'Talent' }
}, { timestamps: true });

export default mongoose.model('Campaign', CampaignSchema);
