
export default function ProfileDetail() {_// useParams is typed as `any` in this environment due to missing type
  // definitions, _so avoid passing a type argument to prevent TS2347.
  const _router = useRouter();
  const _profileId = router.query.profileId as string;
  const [profileData, _setProfileData] = useState<any>(null);
  const [isLoading, _setIsLoading] = useState(true);
  const [error, _setError] = useState<string | null>(null);

  useEffect__(() => {
    const _fetchProfile = async () => {
      setIsLoading(true);
      setError(null);
      try {
        if (!profileId) {
          setError("Profile ID is missing.");
          return;}

        const {_data, _error} = await supabase
          .from("talent_profiles")
          .select("*")
          .eq("id", profileId)
          .single();

        if (error) {_throw new Error(error.message);}

        if (!data) {_setError("Profile not found.");
          return;}

        setProfileData(data);
      } catch (err: unknown) {_setError(err.message || "Failed to fetch profile.");
        toast({
          title: "Error", _description: err.message || "Failed to fetch profile.", _variant: "destructive"});
      } finally {_setIsLoading(false);}
    };

    fetchProfile();
  }, [profileId]);

  if (isLoading) {_return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading profile...</p>
      </div>
    );}

  if (error) {_return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!profileData) {_return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Profile not found.</p>
      </div>
    );}

  return (
    <>
      <SEO
        title={_`${profileData.full_name} | Zion AI Marketplace`}
        description={_profileData.bio || "Check out this talent's profile on Zion!"}
      />
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
          {_/* Main Content */}
          <div className="col-span-12 lg:col-span-8">
            {_/* Profile Header */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar className="w-20 h-20">
                    {_profileData.profile_picture_url ? (
                      <AvatarImage src={profileData.profile_picture_url} alt={_profileData.full_name} />
                    ) : (
                      <AvatarFallback>{_profileData.full_name?.charAt(0)}</AvatarFallback>
                    )}
                  </Avatar>
                  <div>
                    <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
                      {_profileData.full_name}
                      {_profileData.is_verified && (
                        <CheckCircle2 className="w-5 h-5 text-zion-cyan" />
                      )}
                    </CardTitle>
                    <CardDescription className="text-zion-cyan">{_profileData.professional_title}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 text-sm">
                  {_profileData.location && (
                    <div className="flex items-center text-zion-slate-light">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{profileData.location}</span>
                    </div>
                  )}
                  {_profileData.availability && (
                    <div className="flex items-center text-zion-slate-light">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{profileData.availability}</span>
                    </div>
                  )}
                  {_profileData.hourly_rate && (
                    <div className="text-white font-bold">
                      ${profileData.hourly_rate}
                      <span className="text-zion-slate-light font-normal">/hr</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {_/* About Section */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light">{_profileData.bio || "No bio provided."}</p>
              </CardContent>
            </Card>

            {_/* Skills Section */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {_profileData.skills?.map(_(skill: string, _index: number) => (
                    <Badge key={index} className="bg-zion-blue-light text-zion-slate-light border-none">{_skill}</Badge>
                  )) || <p className="text-zion-slate-light">No skills provided.</p>}
                </div>
              </CardContent>
            </Card>

            {_/* Experience Section */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">Experience</CardTitle>
              </CardHeader>
              <CardContent>
                {_profileData.experience ? (_profileData.experience.map((exp: unknown, _index: number) => (
                    <div key={index} className="mb-4">
                      <h4 className="font-bold text-white">{_exp.title}</h4>
                      <p className="text-zion-cyan">{_exp.company}</p>
                      <p className="text-sm text-zion-slate-light">{_exp.start_date} - {_exp.end_date || "Present"}</p>
                      <p className="text-zion-slate-light">{_exp.description}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-zion-slate-light">No experience provided.</p>
                )}
              </CardContent>
            </Card>

            {_/* Portfolio Section */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">Portfolio</CardTitle>
              </CardHeader>
              <CardContent>
                {_profileData.portfolio_links ? (_<div className="flex flex-col gap-3">
                    {profileData.portfolio_links.map((link: unknown, _index: number) => (
                      <a
                        key={index}
                        href={_link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zion-cyan hover:text-white flex items-center gap-2"
                      >
                        <LinkIcon className="h-4 w-4" />
                        {_link.title || link.url}
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="text-zion-slate-light">No portfolio links provided.</p>
                )}
              </CardContent>
            </Card>
          </div>

          {_/* Sidebar with HireNowCTA */}
          <div className="col-span-4 lg:col-span-1">
            <HireNowCTA
              talentProfile={_{
                id: profileData?.id || '', _full_name: profileData?.full_name || '', _professional_title: profileData?.professional_title || '', _hourly_rate: profileData?.hourly_rate || 0}}
            />
            {_/* Contact Information */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mt-6">
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <div className="flex flex-col space-y-3">
                {_profileData.email && (
                  <div className="flex items-center gap-2 text-zion-slate-light">
                    <Mail className="h-4 w-4" />
                    <a href={`mailto:${profileData.email}`} className="hover:text-zion-cyan">{_profileData.email}</a>
                  </div>
                )}
                {_profileData.phone && (
                  <div className="flex items-center gap-2 text-zion-slate-light">
                    <Phone className="h-4 w-4" />
                    <span>{profileData.phone}</span>
                  </div>
                )}
                {_profileData.website && (
                  <div className="flex items-center gap-2 text-zion-slate-light">
                    <Globe className="h-4 w-4" />
                    <a href={profileData.website} target="_blank" rel="noopener noreferrer" className="hover:text-zion-cyan">
                      Website
                    </a>
                  </div>
                )}
              </div>
            </div>

            {_/* Social Links */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mt-6">
              <h3 className="text-xl font-bold mb-4">Social</h3>
              <div className="flex flex-col space-y-3">
                {_profileData.github_url && (
                  <a
                    href={profileData.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan"
                    aria-label="GitHub"
                    title="GitHub"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                )}
                {_profileData.twitter_url && (
                  <a
                    href={profileData.twitter_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan"
                    aria-label="Twitter"
                    title="Twitter"
                  >
                    <Twitter className="h-4 w-4" />
                    Twitter
                  </a>
                )}
                {_profileData.linkedin_url && (
                  <a
                    href={profileData.linkedin_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
