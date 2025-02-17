import mongoose from 'mongoose';
import Payment from '../models/payment.model';

export const createPayment = async (data: { amount: number, recipient: mongoose.Types.ObjectId, status?: string }) => {
  try {
    const payment = new Payment({
      amount: data.amount,
      recipient: data.recipient,
      status: data.status || 'pending',
    });

    await payment.save();
    return { success: true, payment };
  } catch (error) {
    console.error('Error creating payment:', error);
    return { success: false, error: (error as Error).message };
  }
};

export const getAllPayments = async () => {
  try {
    const payments = await Payment.find().populate('recipient');
    return { success: true, payments };
  } catch (error) {
    console.error('Error fetching payments:', error);
    return { success: false, error: (error as Error).message };
  }
};

export const getPaymentById = async (id: string) => {
  try {
    const payment = await Payment.findById(id).populate('recipient');
    if (!payment) return { success: false, error: 'Payment not found' };
    return { success: true, payment };
  } catch (error) {
    console.error('Error fetching payment:', error);
    return { success: false, error: (error as Error).message };
  }
};

export const updatePayment = async (id: string, data: Partial<{ amount: number, status: string }>) => {
  try {
    const payment = await Payment.findByIdAndUpdate(id, data, { new: true }).populate('recipient');
    if (!payment) return { success: false, error: 'Payment not found' };
    return { success: true, payment };
  } catch (error) {
    console.error('Error updating payment:', error);
    return { success: false, error: (error as Error).message };
  }
};

export const deletePayment = async (id: string) => {
  try {
    const payment = await Payment.findByIdAndDelete(id);
    if (!payment) return { success: false, error: 'Payment not found' };
    return { success: true, message: 'Payment deleted successfully' };
  } catch (error) {
    console.error('Error deleting payment:', error);
    return { success: false, error: (error as Error).message };
  }
};
