import Agent from '../models/agent.model';

// Create a new agent
export const createAgent = async (data: { name: string, email: string, role: string, commission_rate: number, avatar?: string, PP?: string }) => {
  try {
    const agent = new Agent({
      name: data.name,
      email: data.email,
      role: data.role,
      commission_rate: data.commission_rate,
      avatar: data.avatar,
      PP: data.PP,
    });

    await agent.save();
    return { success: true, agent };
  } catch (error) {
    console.error('Error creating agent:', error);
  }
};

// Get all agents
export const getAllAgents = async () => {
  try {
    const agents = await Agent.find();
    return { success: true, agents };
  } catch (error) {
    console.error('Error creating campaign:', error);
    return { success: false, error: (error as Error).message };
  }
};

// Get agent by ID
export const getAgentById = async (id: string) => {
  try {
    const agent = await Agent.findById(id);
    if (!agent) {
      return { success: false, error: 'Agent not found' };
    }
    return { success: true, agent };
  } catch (error) {
    console.error('Error creating campaign:', error);
    return { success: false, error: (error as Error).message };
  }
};

// Update agent details
export const updateAgent = async (id: string, data: Partial<{ name: string, email: string, role: string, commission_rate: number, avatar?: string, PP?: string }>) => {
  try {
    const agent = await Agent.findByIdAndUpdate(id, data, { new: true });
    if (!agent) {
      return { success: false, error: 'Agent not found' };
    }
    return { success: true, agent };
  } catch (error) {
    console.error('Error creating campaign:', error);
    return { success: false, error: (error as Error).message };
  }
};

// Delete agent
export const deleteAgent = async (id: string) => {
  try {
    const agent = await Agent.findByIdAndDelete(id);
    if (!agent) {
      return { success: false, error: 'Agent not found' };
    }
    return { success: true, message: 'Agent deleted successfully' };
  } catch (error) {
    console.error('Error creating campaign:', error);
    return { success: false, error: (error as Error).message };
  }
};

// Example: Get all agents along with their associated talent and campaigns
export const getAgentWithDetails = async (id: string) => {
  try {
    const agent = await Agent.findById(id)
      .populate('talent')
      .populate({
        path: 'campaigns',
        populate: { path: 'marketingDirector' }
      });
    
    if (!agent) {
      return { success: false, error: 'Agent not found' };
    }

    return { success: true, agent };
  } catch (error) {
    console.error('Error creating campaign:', error);
    return { success: false, error: (error as Error).message };
  }
};
