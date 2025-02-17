import Talent from '../models/talent.model';

export const getAllTalents = async () => {
  return await Talent.find().populate('agent').populate('talentManager');
};

export const getTalentById = async (id: string) => {
  return await Talent.findById(id).populate('agent').populate('talentManager');
};

interface TalentData {
    name: string;
    age: number;
    agent: string;
    talentManager: string;
    // Add other fields as necessary
}

import { Document } from 'mongoose';

export const createTalent = async (data: TalentData): Promise<Document> => {
    const talent = new Talent(data);
    await talent.save();
    return talent;
};

interface UpdateTalentData {
    name?: string;
    age?: number;
    agent?: string;
    talentManager?: string;
    // Add other fields as necessary
}

export const updateTalent = async (id: string, data: UpdateTalentData): Promise<Document | null> => {
  return await Talent.findByIdAndUpdate(id, data, { new: true });
};

export const deleteTalent = async (id: string) => {
  return await Talent.findByIdAndDelete(id);
};
