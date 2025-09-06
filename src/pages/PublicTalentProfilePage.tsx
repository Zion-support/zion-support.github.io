
import { HireNowCTA } from "@/components/profile/HireNowCTA";
import { logErrorToProduction } from '@/utils/productionLogger';
import { logErrorToProduction } from '@/utils/productionLogger'
import { Star, MapPin, Clock, Link as LinkIcon, Github, Twitter, Linkedin, CheckCircle2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Star } from 'lucide-react'
export default function ProfilePage() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.

  const router = useRouter()
  const profileId = router.query.profileId as string
  const [profileData, setProfileData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  useEffect((,) => {
    const fetchProfile = async () => {
      setIsLoading(true)
      setIsError(false)
import { HireNowCTA } from "@/components/profile/HireNowCTA",
import { logErrorToProduction } from '@/utils/productionLogger',
import { Star, MapPin, Clock, Link as LinkIcon, Github, Twitter, Linkedin, CheckCircle2 } from 'lucide-react'

export default function ProfilePage() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.
  const router = useRouter(),
  const profileId = router.query.profileId as string,
  const [profileData, setProfileData] = useState<any>(null),
  const [isLoading, setIsLoading] = useState(true),
  const [isError, setIsError] = useState(false),

  useEffect(() => {
    const fetchProfile = async () => {
      setIsLoading(true),
      setIsError(false),
        setIsError(true),

        logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error fetching profile' }),

        setIsError(true),


    return (

        description = {profileData.bio || "View the profile of this talented individual.",}

            {/* Bio Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-3">About Me</h2>
              <p className="text-zion-slate-light">{profileData.bio |"No bio provided."}</p>
            </div>
                {profileData.twitter_link && (
                  <a
                    href = {profileData.twitter_link,}

                  </Link>




  /* Placeholder for other sidebar elements */ ;
}</div> </div> </div> </>) ;
}'"};


}
;
