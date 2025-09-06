
export default function ProfileDetail() {
export default function ProfileDetail() {;
  // useParams is typed as `any` in this environment due to missing type;
  // definitions, so avoid passing a type argument to prevent TS2347.;
  const router = useRouter();
  const profileId = router && router.query.profileId as string;
  const [profileData, setProfileData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
        if (error) {
          throw new Error(error.message);
        }
        if (!data) {
      } catch (err: any) {
        setError(err.message || "Failed to fetch profile.");
        toast({
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading profile...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Error: {error}</p>
      </div>
    );
  }
  if (!profileData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Profile not found.</p>
      </div>
        description = {profileData.bio || "Check out this talent's profile on Zion!",}
      />
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
      />;
      <Header />;
      <div className="container mx-auto px-4 py-8">;
        <div className="grid grid-cols-12 gap-6">;
          {/* Main Content */}
          <div className="col-span-12 lg:col-span-8">
            {/* Profile Header */}
            {/* About Section */}
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light">{profileData.bio |"No bio provided."}</p>
              </CardContent>
            </Card>
            {/* Skills Section */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {profileData.skills?.map((skill: string, index: number) => (
                    <Badge key={index} className="bg-zion-blue-light text-zion-slate-light border-none">{skill}</Badge>
                  )) |<p className="text-zion-slate-light">No skills provided.</p>}
                </div>
              </CardContent>
            </Card>
            {/* Experience Section */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">Experience</CardTitle>
              </CardHeader>
              <CardContent>
                {profileData.experience ? (
                  profileData.experience.map((exp: any, index: number) => (
                    <div key={index} className="mb-4">
                      <h4 className="font-bold text-white">{exp.title}</h4>
                      <p className="text-zion-cyan">{exp.company}</p>
                      <p className="text-sm text-zion-slate-light">{exp.start_date} - {exp.end_date |"Present"}</p>
                      <p className="text-zion-slate-light">{exp.description}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-zion-slate-light">No experience provided.</p>
                )}
              </CardContent>
            </Card>
            {/* Portfolio Section */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">Portfolio</CardTitle>
              </CardHeader>
              <CardContent>
                {profileData.portfolio_links ? (
                  <div className="flex flex-col gap-3">
                    {profileData.portfolio_links.map((link: any, index: number) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zion-cyan hover:text-white flex items-center gap-2"
                      >
                        <LinkIcon className="h-4 w-4" />
                    ))}
                  </div>
                ) : (
                  <p className="text-zion-slate-light">No portfolio links provided.</p>
          {/* Sidebar with HireNowCTA */}
          <div className="col-span-4 lg:col-span-1">;
            <HireNowCTA
              talentProfile={{
              }}
            />;
            {/* Contact Information */}
                )}
                )}
            {/* Social Links */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mt-6">;
              <h3 className="text-xl font-bold mb-4">Social</h3>;
              <div className="flex flex-col space-y-3">;
                {profileData && profileData.github_url && (;
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan"
                    aria-label="GitHub"
                    target="_blank"
                    className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan"
                    aria-label="Twitter"
                    target="_blank"
                    className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan"
                    aria-label="LinkedIn"
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
);
}
}, [profileId]);
<p>Error: {error ;
}</p> </div>) ;

    </>);
;
}
