      return {
        type: 'talent',
        id: p.slug,
        slug: p.slug,
        title: p.name,
        subtitle: p.title,
        location: p.location,
        tags: p.skills,
        hourlyRateUsd: p.hourlyRateUsd,
        availability: p.availability,
        verified: true,
        visibility: 'public',
        description: p.bio,
}

export function suggestDidYouMean(query: string): string | null {
  // naive suggestion: if user says devops latam -> normalize to "DevOps jobs in LATAM"
}