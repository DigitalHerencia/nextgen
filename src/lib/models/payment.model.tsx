// models/Payment.js
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PaymentSchema = new Schema({
  amount: { type: Number, required: true },
  // Depending on your implementation, recipient could be a Talent or a FinancialManager user:
  recipient: { type: Schema.Types.ObjectId, ref: 'Talent' },
  status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' }
}, { timestamps: true });

export default mongoose.model('Payment', PaymentSchema);
