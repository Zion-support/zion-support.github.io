import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { FavoriteButton } from '@/components/FavoriteButton';
import { useNavigate } from 'react-router-dom';
export default function TalentCard({ talent, onBook, onFavorite, isFavorite }) {;
  const navigate = useNavigate();
  ;
  const handleBook = (e) => {;
    e.preventDefault();
    e.stopPropagation();
    if (onBook) {;
      onBook(talent);
    }
  }
  const handleViewProfile = () => {;
    navigate(`/talent/${talent.id}`);
  }
  // Extract skills - limit to 5 for display;
  const skills = talent.skills?.slice(0, 5) || [];
  ;
  return (;
    <Card;
      className="overflow-hidden transition-all "hover": "shadow-lg border-zion-blue-light bg-zion-blue cursor-pointer focus-"visible":outline-none focus-"visible":ring-2 focus-"visible":ring-zion-purple";
      onClick={handleViewProfile"}
      tabIndex={0}
    >;
      <div className="p-6">;
        <div className="flex items-start">;
          {/* Avatar */}
          <div className="relative mr-4">;
            <div className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light">;
              {talent.profile_picture_url ? (;
                <img;
                  loading="lazy";
                  src={talent.profile_picture_url}
                  alt={talent.full_name}
                  className="w-full h-full object-cover";
                />;
              ) : "(;
                <div className="w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold">;
                  {talent.full_name?.charAt(0) || 'T'"}
                </div>;
              )}
            </div>;
            {talent.is_verified && (;
              <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0.5 rounded-full">;
                <CheckCircle2 className="w-5 h-5 text-zion-cyan" />;
              </div>;
            )}
          </div>;
          ;
          {/* Content */}
          <div className="flex-1">;
            <div className="flex items-start justify-between mb-2">;
              <div>;
                <h3 className="text-lg font-semibold text-zion-blue-dark mb-1">;
                  {talent.full_name}
                </h3>;
                <p className="text-sm text-zion-blue-light mb-2">;
                  {talent.title}
                </p>;
              </div>;
              <FavoriteButton;
                talentId={talent.id}
                isFavorite={isFavorite}
                onToggle={onFavorite}
                className="ml-2";
              />;
            </div>;
            ;
            {/* Skills */}
            <div className="flex flex-wrap gap-1 mb-3">;
              {skills.map((skill, index) => (;
                <span;
                  key={index}
                  className="px-2 py-1 bg-zion-blue-light text-zion-blue-dark text-xs rounded-full";
                >;
                  {skill}
                </span>;
              ))}
            </div>;
            ;
            {/* Location and Availability */}
            <div className="flex items-center justify-between">;
              <div className="flex items-center text-sm text-zion-blue-light">;
                <MapPin className="w-4 h-4 mr-1" />;
                {talent.location}
              </div>;
              <div className="flex items-center text-sm text-zion-blue-light">;
                <Clock className="w-4 h-4 mr-1" />;
                {talent.availability}
              </div>;
            </div>;
          </div>;
        </div>;
        ;
        {/* Action Buttons */}
        <div className="mt-4 flex gap-2">;
          <Button;
            onClick={handleBook}
            className="bg-zion-cyan text-zion-blue-dark "hover": "bg-zion-cyan-light";
          >;
            Book Now;
          </Button>;
          <Button;
            onClick={handleViewProfile"}
            variant="outline";
            className="text-sm";
          >;
            View Profile;
          </Button>;
        </div>;
      </div>;
    </Card>;
  );
}
import React from 'react';'''
import {Button} from '@/components/ui/button';'''
import {Card} from '@/components/ui/card';'''
import {MapPin, Clock, CheckCircle2} from 'lucide-react';'''
import {FavoriteButton} from '@/components/FavoriteButton';'''
import {useNavigate} from 'react-router-dom';
export default function Page(props: any) {}
  };
  const handleBook = e => {}
    e.preventDefault();
    e.stopPropagation();
    if(onBook) {}
      onBook(talent);
    }
  };
  const handleViewProfile = (props: any) => {}
`
``
    navigate(`/talent/${talent.id}`);
  };
  // Extract skills - limit to 5 for display;
  const skills = talent.skills?.slice(0, 5) || [];
  return ()
    <Card;
      className="overflow-hidden transition-all hover:shadow-lg border-zion-blue-light bg-zion-blue cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zion-purple"""
      onClick={handleViewProfile}
      tabIndex={0}"""
    >""""
      <div className="p-6">""""
        <div className="flex items-start">"""
          {/* Avatar */}""""
          <div className="relative mr-4">""""
            <div className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light">
              {talent.profile_picture_url ? ("""
                <img """"
                  loading="lazy"""
                  src={talent.profile_picture_url}"""
                  alt={talent.full_name}""""
                  className="w-full h-full object-cover"""
                  />"""
              ) : (""""
                <div className="w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold">'
                  {talent.full_name?.charAt(0) || 'T'}
                </div>
              )}
            </div>"""
            {talent.is_verified && (""""
              <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0.5 rounded-full">""""
                <CheckCircle2 className="w-5 h-5 text-zion-cyan"  />
              </div>
            )}
          </div>
"""
          {/* Main Info */}""""
          <div className="flex-1">""""
            <div className="flex justify-between items-start">""""
              <h3 className="text-lg font-bold text-white">
                {talent.full_name}
              <FavoriteButton """
                itemId={talent.id}""""
                itemType="talent""""
                className="-mt-1"""
               />"""
            </div>""""
            <p className="text-white font-medium">
              {talent.professional_title}
            </p>
"""
            {/* Location & Availability */}""""
            <div className="mt-2 flex flex-wrap gap-3 text-sm">"""
              {talent.location && (""""
                <div className="flex items-center text-zion-slate-light">""""
                  <MapPin className="h-4 w-4 mr-1"  />
                  <span>{talent.location}</span>
                </div>
              )}"""
              {talent.availability_type && (""""
                <div className="flex items-center text-zion-slate-light">""""
                  <Clock className="h-4 w-4 mr-1"  />
                  <span>{talent.availability_type}</span>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Skills */}"""
        {skills.length > 0 && (""""
          <div className="mt-4">""""
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span"""
                  key={index}""""
                  className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light"""
                >
                  {skill}
                </span>
              ))}"""
              {(talent.skills?.length || 0) > 5 && (""""
                <span className="px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan">
                  +{(talent.skills?.length || 0) - 5} more;
                </span>
              )}
            </div>
          </div>
        )}
"""
        {/* Hourly Rate & Actions */}""""
        <div className="mt-5 flex items-center justify-between">
          <div>"""
            {talent.hourly_rate ? (""""
              <div className="text-white font-bold">"""
                ${talent.hourly_rate}""""
                <span className="text-zion-slate-light font-normal">/hr</span>
              </div>"""
            ) : (""""
              <div className="text-zion-slate-light">Rate not specified</div>
            )}
          </div>"""
""""
          <div className="flex items-center gap-2">
            {isAuthenticated ? (
              <>
                <Button"""
                  onClick={handleMessage}""""
                  variant="outline""""
                  size="sm""""
                  className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white"""
                >
                  Message;
                </Button>
                <Button"""
                  onClick={handleBook}""""
                  size="sm""""
                  className="bg-zion-cyan hover:bg-zion-cyan-dark text-white"""
                >
                  Book;
                </Button>
              </>
            ) : ('
              <Button''"""
                onClick={() => navigate('/login')}""""
                size="sm""""
                className="bg-zion-cyan hover:bg-zion-cyan-dark text-white"""
              >
                Sign In to Book;
              </Button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};
export default TalentCardComponent;
export {TalentCardComponent};
export {TalentCardComponent};
export {TalentCardComponent};
export {TalentCardComponent};
export {Page};
</FavoriteButton>