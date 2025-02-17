import mongoose from 'mongoose';
import  Campaign  from '../models/campaign.model';

// Create a new campaign
export const createCampaign = async (data: { title: string, budget: number, metrics: object, performance_data: object, marketingDirector: mongoose.Types.ObjectId, talent: mongoose.Types.ObjectId }) => {
  try {
    const campaign = new Campaign({
      title: data.title,
      budget: data.budget,
      metrics: data.metrics,
      performance_data: data.performance_data,
      marketingDirector: data.marketingDirector,
      talent: data.talent,
    });

    await campaign.save();
    return { success: true, campaign };
  } catch (error) {
    console.error('Error creating campaign:', error);
    return { success: false, error: (error as Error).message };
  }
};

// Get all campaigns
export const getAllCampaigns = async () => {
  try {
    const campaigns = await Campaign.find().populate('marketingDirector').populate('talent');
    return { success: true, campaigns };
  } catch (error) {
    console.error('Error creating campaign:', error);
    return { success: false, error: (error as Error).message };
  }
};

// Get campaign by ID
export const getCampaignById = async (id: string) => {
  try {
    const campaign = await Campaign.findById(id).populate('marketingDirector').populate('talent');
    if (!campaign) {
      return { success: false, error: 'Campaign not found' };
    }
    return { success: true, campaign };
  } catch (error) {
    console.error('Error creating campaign:', error);
    return { success: false, error: (error as Error).message };
  }
};

// Update campaign details
export const updateCampaign = async (id: string, data: Partial<{ title: string, budget: number, metrics: object, performance_data: object, marketingDirector: mongoose.Types.ObjectId, talent: mongoose.Types.ObjectId }>) => {
  try {
    const campaign = await Campaign.findByIdAndUpdate(id, data, { new: true }).populate('marketingDirector').populate('talent');
    if (!campaign) {
      return { success: false, error: 'Campaign not found' };
    }
    return { success: true, campaign };
  } catch (error) {
    console.error('Error creating campaign:', error);
    return { success: false, error: (error as Error).message };
  }
};

// Delete campaign
export const deleteCampaign = async (id: string) => {
  try {
    const campaign = await Campaign.findByIdAndDelete(id);
    if (!campaign) {
      return { success: false, error: 'Campaign not found' };
    }
    return { success: true, message: 'Campaign deleted successfully' };
  } catch (error) {
    console.error('Error creating campaign:', error);
    return { success: false, error: (error as Error).message };
  }
};

// Example: Get campaign with detailed metrics and performance data
export const getCampaignWithMetrics = async (id: string) => {
  try {
    const campaign = await Campaign.findById(id)
      .populate('marketingDirector')
      .populate('talent');
    
    if (!campaign) {
      return { success: false, error: 'Campaign not found' };
    }

    // Example: Aggregate or manipulate metrics and performance data here if needed
    return { success: true, campaign };
  } catch (error) {
    console.error('Error creating campaign:', error);
    return { success: false, error: (error as Error).message };
  }
};
