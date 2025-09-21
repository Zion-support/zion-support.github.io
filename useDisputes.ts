import { useState, useCallback } from 'react';
import { Dispute, DisputeMessage } from '@/types/disputes';

export function useDisputes() {
  const [disputes, setDisputes] = useState<Dispute[]>([]);
  const [loading, setLoading] = useState(false);

  const getDisputeById = useCallback(async (id: string): Promise<Dispute> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockDispute: Dispute = {
      id,
      reason_code: 'payment_issue',
      description: 'Client is not satisfied with the delivered work and refuses to pay.',
      status: 'under_review',
      raised_by: 'client_123',
      created_at: '2024-01-15T10:00:00Z',
      client_profile: {
        id: 'client_123',
        display_name: 'John Doe',
        avatar_url: 'https://via.placeholder.com/40/FF0000/FFFFFF?text=JD',
      },
      talent_profile: {
        id: 'talent_456',
        display_name: 'Jane Smith',
        avatar_url: 'https://via.placeholder.com/40/00FF00/FFFFFF?text=JS',
      },
    };
    
    return mockDispute;
  }, []);

  const getDisputeMessages = useCallback(async (disputeId: string): Promise<DisputeMessage[]> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const mockMessages: DisputeMessage[] = [
      {
        id: '1',
        dispute_id: disputeId,
        user_id: 'client_123',
        message: 'I am not satisfied with the quality of work delivered. The final product does not meet the requirements we discussed.',
        created_at: '2024-01-15T10:00:00Z',
        is_admin_note: false,
        user_profile: {
          display_name: 'John Doe',
          avatar_url: 'https://via.placeholder.com/40/FF0000/FFFFFF?text=JD',
        },
      },
      {
        id: '2',
        dispute_id: disputeId,
        user_id: 'talent_456',
        message: 'I understand your concerns. Let me review the requirements and provide a revised version that addresses your feedback.',
        created_at: '2024-01-15T11:30:00Z',
        is_admin_note: false,
        user_profile: {
          display_name: 'Jane Smith',
          avatar_url: 'https://via.placeholder.com/40/00FF00/FFFFFF?text=JS',
        },
      },
    ];
    
    return mockMessages;
  }, []);

  const resolveDispute = useCallback(async (disputeId: string, resolution: {
    summary: string;
    resolution_type: string;
  }): Promise<boolean> => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Update local state
      setDisputes(prev => 
        prev.map(dispute => 
          dispute.id === disputeId
            ? {
                ...dispute,
                status: 'resolved',
                resolution_summary: resolution.summary,
                resolution_type: resolution.resolution_type as any,
                resolved_at: new Date().toISOString(),
              }
            : dispute
        )
      );
      
      return true;
    } catch (error) {
      console.error('Failed to resolve dispute:', error);
      return false;
    }
  }, []);

  return {
    disputes,
    loading,
    getDisputeById,
    getDisputeMessages,
    resolveDispute,
  };
}