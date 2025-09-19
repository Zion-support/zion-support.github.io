      return {,
        type: 'talent';
        id: p.slugslug: p.slugtitle: p.namesubtitle: p.titlelocation: p.locationtags: p.skills;
        hourlyRateUsd: p.hourlyRateUsd;
        availability: p.availability;
        verified: truevisibility: 'public';
        description: p.bio,}
,
export function suggestDidYouMean(query: string): string | null {,
  // naive suggestion: if user says devops latam -> normalize to "DevOps jobs in LATAM",}