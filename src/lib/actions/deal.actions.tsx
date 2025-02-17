import mongoose from 'mongoose';
import Deal from '../models/deal.model';

export const createDeal = async (data: { talent: mongoose.Types.ObjectId, agent: mongoose.Types.ObjectId, brand: string, offer_amount: number, status?: string }) => {
  try {
    const deal = new Deal({
      talent: data.talent,
      agent: data.agent,
      brand: data.brand,
      offer_amount: data.offer_amount,
      status: data.status || 'pending',
    });

    await deal.save();
    return { success: true, deal };
  } catch (error) {
    console.error('Error creating deal:', error);
    return { success: false, error: (error as Error).message };
  }
};

export const getAllDeals = async () => {
  try {
    const deals = await Deal.find().populate('talent').populate('agent');
    return { success: true, deals };
  } catch (error) {
    console.error('Error fetching deals:', error);
    return { success: false, error: (error as Error).message };
  }
};

export const getDealById = async (id: string) => {
  try {
    const deal = await Deal.findById(id).populate('talent').populate('agent');
    if (!deal) return { success: false, error: 'Deal not found' };
    return { success: true, deal };
  } catch (error) {
    console.error('Error fetching deal:', error);
    return { success: false, error: (error as Error).message };
  }
};

export const updateDeal = async (id: string, data: Partial<{ brand: string, offer_amount: number, status: string }>) => {
  try {
    const deal = await Deal.findByIdAndUpdate(id, data, { new: true }).populate('talent').populate('agent');
    if (!deal) return { success: false, error: 'Deal not found' };
    return { success: true, deal };
  } catch (error) {
    console.error('Error updating deal:', error);
    return { success: false, error: (error as Error).message };
  }
};

export const deleteDeal = async (id: string) => {
  try {
    const deal = await Deal.findByIdAndDelete(id);
    if (!deal) return { success: false, error: 'Deal not found' };
    return { success: true, message: 'Deal deleted successfully' };
  } catch (error) {
    console.error('Error deleting deal:', error);
    return { success: false, error: (error as Error).message };
  }
};
