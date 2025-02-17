import mongoose from 'mongoose';
import Manager from '../models/manager.model';

export const createManager = async (data: { name: string, managed_talent?: mongoose.Types.ObjectId[], commission_rate: number, PP?: string }) => {
  try {
    const manager = new Manager({
      name: data.name,
      managed_talent: data.managed_talent || [],
      commission_rate: data.commission_rate,
      PP: data.PP,
    });

    await manager.save();
    return { success: true, manager };
  } catch (error) {
    console.error('Error creating manager:', error);
    return { success: false, error: (error as Error).message };
  }
};

export const getAllManagers = async () => {
  try {
    const managers = await Manager.find().populate('managed_talent');
    return { success: true, managers };
  } catch (error) {
    console.error('Error fetching managers:', error);
    return { success: false, error: (error as Error).message };
  }
};

export const getManagerById = async (id: string) => {
  try {
    const manager = await Manager.findById(id).populate('managed_talent');
    if (!manager) return { success: false, error: 'Manager not found' };
    return { success: true, manager };
  } catch (error) {
    console.error('Error fetching manager:', error);
    return { success: false, error: (error as Error).message };
  }
};

export const updateManager = async (id: string, data: Partial<{ name: string, managed_talent: mongoose.Types.ObjectId[], commission_rate: number, PP?: string }>) => {
  try {
    const manager = await Manager.findByIdAndUpdate(id, data, { new: true }).populate('managed_talent');
    if (!manager) return { success: false, error: 'Manager not found' };
    return { success: true, manager };
  } catch (error) {
    console.error('Error updating manager:', error);
    return { success: false, error: (error as Error).message };
  }
};

export const deleteManager = async (id: string) => {
  try {
    const manager = await Manager.findByIdAndDelete(id);
    if (!manager) return { success: false, error: 'Manager not found' };
    return { success: true, message: 'Manager deleted successfully' };
  } catch (error) {
    console.error('Error deleting manager:', error);
    return { success: false, error: (error as Error).message };
  }
};
