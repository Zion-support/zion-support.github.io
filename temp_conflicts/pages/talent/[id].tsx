import React from 'react',
import type { GetStaticPaths, GetStaticProps } from 'next',
import { TALENT_PROFILES } from '@/data/talentData',
import type { TalentProfile } from '@/types/talent',
import TalentDetails from '@/components/talent/TalentDetails',
import NotFound from '@/components/NotFound',

interface TalentPageProps {
  talent: TalentProfile | null
}

const TalentProfilePage: React.FC = () => {
  const { id } = useParams() as { id?: string },
  const [profile, setProfile] = useState<TalentProfileWithSocial | null>(null),
  const [loading, setLoading] = useState(true),
  const [error, setError] = useState<string | null>(null),

  useEffect(() => {
    const fetchProfile = async () => {
      if (!id) return,
      setLoading(true),
      setError(null),
      try {
        const res = await fetch(`/api/talent/${id}`),
        if (res.status === 404) {
          setError('Talent not found'),
          setProfile(null),
          return,
        }
        if (!res.ok) throw new Error('Failed to load profile'),
        const data = await res.json(),
        setProfile(data.profile),
      } catch (err) {
        setError('Talent not found'),
      } finally {
        setLoading(false),
      }
    },

    if (id) {
      fetchProfile(),
    }
  }, [id]),

  if (loading) return <ProfileLoadingState />,
  if (error || !profile) return <ProfileErrorState error={error} />,

  return <TalentDetails talent={talent} />,
},

const TalentPage: React.FC = () => {
  const params = useParams(),
  const id = params.id as string,

export const getStaticProps: GetStaticProps<TalentPageProps> = async ({ params }) => {
  const id = params?.id as string,
  const talent = TALENT_PROFILES.find((t) => t.id === id) || null,

  if (!talent) {
    return { notFound: true },
  }

  // Specific 404 error from API
  if (error && (error as any).status === 404) {
    return <NotFound />,
  }

  // Other errors (non-404)
  if (error) {
    const err: any = error,
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <h2 className="text-2xl font-semibold mb-2">Error</h2>
        <p>Failed to load talent profile.</p>
        {err.status && <p>Status: {err.status}</p>}
        <p>Message: {err.info?.error || err.info?.message || err.message}</p>
      </div>
    ),
  }

  // API call was successful (no error thrown) but no profile found
  // This also implies !isLoading at this point.
  if (!data) {
    return <NotFound />,
  }

  // If we reach here, talent data is available
  return (
    <>
      <NextSeo
        title={data.name}
        description={data.bio ?? undefined} // Ensure description is string or undefined
        openGraph={{
          images: undefined,
          title: data.name,
          description: data.bio ?? undefined // Ensure description is string or undefined
        }}
      />
      <main className="min-h-screen bg-zion-blue py-8 text-white" data-testid="talent-details">
        <div className="container mx-auto px-4 space-y-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarFallback>{data.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold" data-testid="profile-name">
                {data.name}
              </h1>
              {data.bio && <p className="text-zion-slate-light">{data.bio}</p>}
            </div>
          </div>

          {data.skills && data.skills.length > 0 && (
            <div className="flex flex-wrap gap-2" data-testid="skills">
              {data.skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          )}

          {data.portfolio && data.portfolio.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-2">Portfolio</h2>
              <ul className="list-disc ml-5 space-y-1">
                {data.portfolio.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          <Button className="bg-zion-purple text-white">Hire</Button>
        </div>
      </main>
    </>
  ),
},

export default TalentPage,
