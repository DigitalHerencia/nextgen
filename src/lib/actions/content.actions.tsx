import mongoose from 'mongoose';
import Content from '../models/content.model';

// Type for the data input when creating or updating content
interface ContentData {
  talent: mongoose.Types.ObjectId;
  type: 'photo' | 'video';
  engagement?: number;
  campaign?: mongoose.Types.ObjectId;
}

// Create a new content entry
export const createContent = async (data: ContentData): Promise<{ success: boolean; content?: mongoose.Document; error?: string }> => {
  try {
    const content = new Content({
      talent: data.talent,
      type: data.type,
      engagement: data.engagement || 0, // Default to 0 if not provided
      campaign: data.campaign,
    });

    await content.save();
    return { success: true, content };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error creating content:', error.message);
      return { success: false, error: error.message };
    }
    console.error('Unknown error occurred');
    return { success: false, error: 'An unknown error occurred' };
  }
};

// Get all content entries
export const getAllContent = async (): Promise<{ success: boolean; content?: mongoose.Document[]; error?: string }> => {
  try {
    const content = await Content.find().populate('talent').populate('campaign');
    return { success: true, content };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error fetching content:', error.message);
      return { success: false, error: error.message };
    }
    console.error('Unknown error occurred');
    return { success: false, error: 'An unknown error occurred' };
  }
};

// Get content by ID
export const getContentById = async (id: string): Promise<{ success: boolean; content?: mongoose.Document; error?: string }> => {
  try {
    const content = await Content.findById(id).populate('talent').populate('campaign');
    if (!content) {
      return { success: false, error: 'Content not found' };
    }
    return { success: true, content };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error fetching content by ID:', error.message);
      return { success: false, error: error.message };
    }
    console.error('Unknown error occurred');
    return { success: false, error: 'An unknown error occurred' };
  }
};

// Update content entry
export const updateContent = async (id: string, data: Partial<ContentData>): Promise<{ success: boolean; content?: mongoose.Document; error?: string }> => {
  try {
    const content = await Content.findByIdAndUpdate(id, data, { new: true }).populate('talent').populate('campaign');
    if (!content) {
      return { success: false, error: 'Content not found' };
    }
    return { success: true, content };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error updating content:', error.message);
      return { success: false, error: error.message };
    }
    console.error('Unknown error occurred');
    return { success: false, error: 'An unknown error occurred' };
  }
};

// Delete content entry
export const deleteContent = async (id: string): Promise<{ success: boolean; message?: string; error?: string }> => {
  try {
    const content = await Content.findByIdAndDelete(id);
    if (!content) {
      return { success: false, error: 'Content not found' };
    }
    return { success: true, message: 'Content deleted successfully' };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error deleting content:', error.message);
      return { success: false, error: error.message };
    }
    console.error('Unknown error occurred');
    return { success: false, error: 'An unknown error occurred' };
  }
};

// Example: Get content with detailed engagement and campaign data
export const getContentWithDetails = async (id: string): Promise<{ success: boolean; content?: mongoose.Document; error?: string }> => {
  try {
    const content = await Content.findById(id)
      .populate('talent')
      .populate('campaign');

    if (!content) {
      return { success: false, error: 'Content not found' };
    }

    // You can aggregate or manipulate content details here if needed
    return { success: true, content };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error fetching content with details:', error.message);
      return { success: false, error: error.message };
    }
    console.error('Unknown error occurred');
    return { success: false, error: 'An unknown error occurred' };
  }
};
