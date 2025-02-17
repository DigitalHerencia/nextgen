import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const talentSchema = new Schema({
  name: { type: String, required: true },
  bio: { type: String, required: true },
  social_links: {
    instagram: { type: String },
    twitter: { type: String }
  },
  category: { type: String, required: true },
  earnings: { type: Number, required: true },
  talentManager: { type: Schema.Types.ObjectId, ref: 'Manager' },
  agent: { type: Schema.Types.ObjectId, ref: 'Agent' },
  avatar: { type: String }
});

export default mongoose.model('Talent', talentSchema);