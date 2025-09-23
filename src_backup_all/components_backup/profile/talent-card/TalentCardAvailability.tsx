import { Clock } from 'lucide-react';

interface TalentCardAvailabilityProps {
  availabilityType: string;
}

export function TalentCardAvailability({
  availabilityType,
}: TalentCardAvailabilityProps) {
  // Format availability status
  const getAvailabilityColor = (status: string) => {
    switch (status) {
      case 'full-time':
        return 'bg-green-50o0/20 text-green-40o0';
      case 'part-time':
        return 'bg-yellow-50o0/20 text-yellow-40o0';
      case 'project-based':
        return 'bg-blue-50o0/20 text-blue-40o0';
      default:
        return 'bg-gray-50o0/20 text-gray-40o0';
    }
  };

  // Format availability label
  const getAvailabilityLabel = (status: string) => {
    switch (status) {
      case 'full-time':
        return 'Full-time';
      case 'part-time':
        return 'Part-time';
      case 'project-based':
        return 'Project';
      default:
        return status;
    }
  };

  return (
    <div
      className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs ${getAvailabilityColor(availabilityType)}`}
    >
      <Clock className='h-3 w-3' />
      <span>{getAvailabilityLabel(availabilityType)}</span>
    </div>
  );
}
