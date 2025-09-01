import { useEffect } from 'react';

export default function Page() {
    if(!user) {
        return (<>

        <div className="min - h-screen bg-zion - blue flex items - center justify -center">
          <div className="bg-zion - blue - dark border border-zion - blue - light rounded-lg p - 6 max - w-md">
            <h1 className="text-xl font - bold text-white mb-4">Please log in</h1>
            <p className="text-zion - slate mb-4">You need to be logged in to view your profile.</p>
            <Button onClick={ () => router("/login?redirect=/profile") } className="bg-gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text-white">
              Go to Login
            </Button>
          </div>
        </div>

      </>) }
    return (<>

      <div className="min - h-screen bg-zion -blue">
        <div className="container mx - auto px-4 py-8">
          <h1 className="text-2xl font - bold text-white mb-8">My Profile</h1>
          <div className="bg-zion - blue - dark border border-zion - blue - light rounded-lg p -6">
            <div className="flex flex - col md:flex - row gap-6">
              <div className="md:w-1/3">
                <div className="w-32 h-32 rounded-full bg-zion - purple flex items - center justify - center text-3xl font - bold text-white mb-4 mx - auto md:mx -0">
                  {user.displayName ? user.displayName.split (' ') .map(name => name[0]) .join('') : user.email?.charAt(0) }
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-xl font - bold text-white">{user.displayName || "User"}</h2>
                <p className="text-zion - slate - light mb-4">{user.email}</p>
                <Button onClick={ () => {
            logout () ;
            router("/") ;
        }} variant="outline" className="border-zion - blue - light text-zion - slate - light hover:bg-zion - blue - light hover:text-white">
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>) }
;
}}}}