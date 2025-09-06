import { supabase } from "@/integrations/supabase/client";

export interface ModerationFlag {
  id: string;
  user_id: string;
  content_type: string;
  content_id: string;
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
  updated_at: string;
}

export interface ModerationAction {
  id: string;
  flag_id: string;
  moderator_id: string;
  action: 'approve' | 'reject' | 'escalate';
  notes?: string;
  created_at: string;
}

export const moderationDb = {
  async getFlags(status?: string) {
    const { data, error } = await supabase
      .from('moderation_flags')
      .select('*')
      .eq(status ? 'status' : 'id', status || 'id')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data as ModerationFlag[];
  },

  async getFlagById(id: string) {
    const { data, error } = await supabase
      .from('moderation_flags')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data as ModerationFlag;
  },

  async updateFlagStatus(id: string, status: string, moderatorId: string, notes?: string) {
    const { data, error } = await supabase
      .from('moderation_flags')
      .update({ 
        status,
        updated_at: new Date().toISOString()
      })
      .eq('id', id)
      .select();
    
    if (error) throw error;

    // Create moderation action record
    await supabase
      .from('moderation_actions')
      .insert({
        flag_id: id,
        moderator_id: moderatorId,
        action: status === 'approved' ? 'approve' : 'reject',
        notes
      });

    return data;
  },

  async createFlag(flagData: Omit<ModerationFlag, 'id' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabase
      .from('moderation_flags')
      .insert({
        ...flagData,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      })
      .select();
    
    if (error) throw error;
    return data[0] as ModerationFlag;
  }
};