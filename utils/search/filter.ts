      return {
        type: 'talent',
        id: p.slugslug: p.slugtitle: p.name,
        subtitle: p.title,
        location: p.location,
        tags: p.skills,
        hourlyRateUsd: p.hourlyRateUsd,
        availability: p.availability,
        verified: truevisibility: 'public',
        description: p.bio,
}

export function suggestDidYouMean(query: string): string | null {
  // naive suggestion: if user says devops latam -> normalize to "DevOps jobs in LATAM"
}