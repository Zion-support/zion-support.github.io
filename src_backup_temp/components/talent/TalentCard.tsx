import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Clock, CheckCircle2 } from 'lucide-react';
interface Talent {
  "id": string;
  name: string;
  title: string;
  location: string;
  rating: number;
  hourlyRate: number;
  availability: string;
  skills: string[];
  image?: string;
}
interface TalentCardProps {
  "talent": Talent;
  onBook?: (talent: Talent) => void;
  onViewProfile?: (talent: Talent) => void;
}
export default function TalentCard({ talent, onBook, onViewProfile }: TalentCardProps) {
  const handleBook = ("e": React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onBook) {
      onBook(talent);
    }
  };
  const handleViewProfile = ("e": React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onViewProfile) {
      onViewProfile(talent);
    }
  };
  return (
    <Card className="p-6 "hover": shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
            {talent.image ? (
              <img src={talent.image} alt={talent.name} className="w-12 h-12 rounded-full object-cover" />
            ) : (
              <span className="text-gray-600 font-semibold">
                {talent.name.charAt(0).toUpperCase()}
              </span>
            )}
          </div>
          <div>
            <h3 className="font-semibold text-lg">{talent.name}</h3>
            <p className="text-gray-600">{talent.title}</p>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <CheckCircle2 className="w-4 h-4 text-green-500" />
          <span className="text-sm text-gray-600">{talent.rating}/5</span>
        </div>
      </div>
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-gray-600">
          <MapPin className="w-4 h-4 mr-2" />
          {talent.location}
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Clock className="w-4 h-4 mr-2" />
          {talent.availability}
        </div>
        <div className="text-sm font-semibold text-green-600">
          ${talent.hourlyRate}/hour
        </div>
      </div>
      <div className="mb-4">
        <div className="flex flex-wrap gap-1">
          {talent.skills.slice(0, 3).map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
            >
              {skill}
            </span>
          ))}
          {talent.skills.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
              +{talent.skills.length - 3} more
            </span>
          )}
        </div>
      </div>
      <div className="flex space-x-2">
        <Button
          onClick={handleViewProfile}
          variant="outline"
          className="flex-1"
        >
          View Profile
        </Button>
        <Button
          onClick={handleBook}
          className="flex-1"
        >
          Book Now
        </Button>
      </div>
    </Card>
  );
}
import React from 'react'; import { Button } from '@/components/ui/button'; import { Card } from '@/components/ui/card'; import { MapPin,Clock,CheckCircle2 } from 'lucide-react'; interface Talent { id: string; name: string; title: string; location: string; rating: number; hourlyRate: number; availability: string; skills: string[]; image?: string} interface TalentCardProps { talent: Talent; onBook?: (talent: Talent) => void; onViewProfile?: (talent: Talent) => void} export default function TalentCard({ talent,onBook,onViewProfile }: TalentCardProps) { const handleBook = (e: React.MouseEvent) => { e.preventDefault(); e.stopPropagation(); if (onBook) { onBook(talent)} }; const handleViewProfile = (e: React.MouseEvent) => { e.preventDefault(); e.stopPropagation(); if (onViewProfile) { onViewProfile(talent)} }; return ( <Card className="p-6 hover:shadow-lg transition-shadow"> <div className="flex items-start justify-between mb-4"> <div className="flex items-center space-x-3"> <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center"> {talent.image ? ( <img src={talent.image} alt={talent.name} className="w-12 h-12 rounded-full object-cover" /> ) : ( <span className="text-gray-600 font-semibold"> {talent.name.charAt(0).toUpperCase()} </span> )} </div> <div> <h3 className="font-semibold text-lg">{talent.name}</h3> <p className="text-gray-600">{talent.title}</p> </div> </div> <div className="flex items-center space-x-1"> <CheckCircle2 className="w-4 h-4 text-green-500" /> <span className="text-sm text-gray-600">{talent.rating}/5</span> </div> </div> <div className="space-y-2 mb-4"> <div className="flex items-center text-sm text-gray-600"> <MapPin className="w-4 h-4 mr-2" /> {talent.location} </div> <div className="flex items-center text-sm text-gray-600"> <Clock className="w-4 h-4 mr-2" /> {talent.availability} </div> <div className="text-sm font-semibold text-green-600"> ${talent.hourlyRate}/hour </div> </div> <div className="mb-4"> <div className="flex flex-wrap gap-1"> {talent.skills.slice(0,3).map((skill,index) => ( <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full" > {skill} </span> ))} {talent.skills.length > 3 && ( <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"> +{talent.skills.length - 3} more </span> )} </div> </div> <div className="flex space-x-2"> <Button onClick={handleViewProfile} variant="outline" className="flex-1" > View Profile </Button> <Button onClick={handleBook} className="flex-1" > Book Now </Button> </div> </Card> )}