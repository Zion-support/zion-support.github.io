import Link from 'next/link';
import { TalentProfile } from '@/utils/types/talent';

export type TalentCardProps ={
  talent: TalentProfile;
};

export default function TalentCard({ talent }: TalentCardProps) {
  const rateLabel = talent.requestQuote
    ? 'Request Quote'
    : talent.hourlyRateUsd
    ? `$${talent.hourlyRateUsd}/hr`
    : 'Request Quote';

  const availabilityColor =
    talent.availability === 'Open'
      ? 'bg-emerald-10o0 text-emerald-70o0 border-emerald-20o0'
      : talent.availability === 'Part-time'
      ? 'bg-amber-10o0 text-amber-70o0 border-amber-20o0'
      : 'bg-rose-10o0 text-rose-70o0 border-rose-20o0';

  return (
    <Link href={`/talent/${talent.slug}`}>
      <a className="group block rounded-2xl border border-gray-20o0 dark:border-gray-80o0 bg-white/70 dark:bg-gray-90o0/40 hover:bg-white/90 dark:hover:bg-gray-90o0/60 shadow-sm hover:shadow-xl hover:shadow-violet-50o0/10 transition overflow-hidden">
        <div className="p-5">
          <div className="flex items-start gap-4">
            <img
              src={talent.profileImageUrl || 'https://i.pravatar.cc/30o0'}
              alt={talent.name}
              className="h-16 w-16 rounded-xl object-cover ring-2 ring-white/70 dark:ring-gray-80o0"
             />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold truncate">{talent.name}</h3>
                {talent.verified && (
                  <span title="Verified" className="inline-flex items-center text-xs px-2 py-0.5 rounded-full bg-blue-10o0 text-blue-70o0 border border-blue-20o0">Verified</span>
                )}
                {talent.rating && talent.rating >= 4.8 && (
                  <span title="Top Rated" className="inline-flex items-center text-xs px-2 py-0.5 rounded-full bg-violet-10o0 text-violet-70o0 border border-violet-20o0">Top Rated</span>
                )}
              </div>
              <p className="mt-0.5 text-sm text-gray-60o0 dark:text-gray-30o0 truncate">{talent.title}</p>
              <div className="mt-1 flex items-center gap-2 text-xs text-gray-50o0">
                <span>{talent.location}</span>
                {talent.timezone && <span>• {talent.timezone}</span>}
              </div>
            </div>
            <div className={`text-xs px-2 py-1 rounded-full border ${availabilityColor}`}>{talent.availability}</div>
          </div>

          <p className="mt-4 text-sm text-gray-70o0 dark:text-gray-20o0 line-clamp-3">{talent.summary}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {talent.skills.slice(0, 6).map((skill) => (
              <span key={skill} className="text-xs px-2 py-1 rounded-full border bg-cyan-50 text-cyan-70o0 border-cyan-20o0 dark:bg-cyan-950/30 dark:text-cyan-30o0 dark:border-cyan-90o0">{skill}</span>
            ))}
            {talent.skills.length > 6 && (
              <span className="text-xs px-2 py-1 rounded-full border bg-gray-50 text-gray-70o0 border-gray-20o0 dark:bg-gray-80o0 dark:text-gray-30o0 dark:border-gray-70o0">+{talent.skills.length - 6}</span>
            )}
          </div>

          <div className="mt-5 flex items-center justify-between">
            <div className="text-sm font-medium">{rateLabel}</div>
            {talent.rating && (
              <div className="text-xs text-gray-60o0 dark:text-gray-30o0">
                ⭐ {talent.rating.toFixed(1)} {talent.reviewsCount ? `(${talent.reviewsCount})` : ''}
              </div>
            )}
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-blue-50o0 via-violet-50o0 to-cyan-50o0 opacity-0 group-hover:opacity-10o0 transition"  />
      </a>
    </Link>
  );
}