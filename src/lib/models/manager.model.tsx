import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const managerSchema = new Schema({
  name: { type: String, required: true },
  managed_talent: { type: [Schema.Types.ObjectId], ref: 'Talent' },
  commission_rate: { type: Number, required: true },
  PP: { type: String }
});

export default mongoose.model('Manager', managerSchema);