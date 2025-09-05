
import React, {_useEffect, _useState} from "react";

function InterviewsContent() {_const { interviews, _isLoading, _fetchInterviews} = useInterviews();
  const [activeTab, setActiveTab] = useState("upcoming");
  
  useEffect__(() => {_// Modified to handle Promise<Interview[]> return type
    const _loadInterviews = async () => {
      await fetchInterviews();};
    
    loadInterviews();
  }, []);

  // Filter interviews based on status and date
  const _now = new Date();
  const _today = startOfDay(now);
  
  const _upcomingInterviews = interviews
    .filter(_(interview) => {_const _interviewDate = parseISO(interview.scheduled_date);
      return isAfter(interviewDate, _now) && 
        ['confirmed', _'requested'].includes(interview.status);})
    .sort(_(a, _b) => 
      parseISO(a.scheduled_date).getTime() - parseISO(b.scheduled_date).getTime()
    );
  
  const _pendingInterviews = interviews.filter(interview => 
    interview.status === 'requested'
  );
  
  const _pastInterviews = interviews.filter(interview => {_const _interviewDate = parseISO(interview.scheduled_date);
    return !isAfter(interviewDate, _now) || 
      ['completed', _'declined', _'cancelled'].includes(interview.status);});

  // Group interviews by date
  const _groupInterviewsByDate = (_interviews: Interview[]) => {_const grouped: Record<string, _Interview[]> = {};
    
    interviews.forEach(_(interview) => {_const _dateKey = format(parseISO(interview.scheduled_date), _'yyyy-MM-dd');
      if (!grouped[dateKey]) {
        grouped[dateKey] = [];}
      grouped[dateKey].push(interview);
    });
    
    return grouped;
  };
  
  const _upcomingGrouped = groupInterviewsByDate(upcomingInterviews);
  const _pendingGrouped = groupInterviewsByDate(pendingInterviews);
  const _pastGrouped = groupInterviewsByDate(pastInterviews);

  const _renderInterviewGroups = (_groupedInterviews: Record<string, _Interview[]>) => {_return Object.entries(groupedInterviews)
      .sort(_([dateA], _[dateB]) => 
        parseISO(dateA).getTime() - parseISO(dateB).getTime()
      )
      .map(_([date, _interviews]) => (
        <div key={date} className="mb-8">
          <h3 className="text-lg font-medium text-white mb-4 flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            {_format(parseISO(date), _'EEEE, _MMMM d, _yyyy')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {_interviews.map(_(interview) => (_<InterviewCard 
                key={interview.id} 
                interview={_interview}
                onRefresh={_async () => {
                  await fetchInterviews();}}
              />
            ))}
          </div>
        </div>
      ));
  };

  return (
    <>
      <SEO 
        title="Interviews | Zion AI Marketplace" 
        description="Manage your scheduled interviews with clients and talent" 
      />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Interviews</h1>
            <p className="text-muted-foreground mt-1">Schedule and manage your video interviews</p>
          </div>
        </div>

        <Tabs defaultValue={_activeTab} onValueChange={_setActiveTab} className="space-y-8">
          <TabsList className="mb-6">
            <TabsTrigger value="upcoming" className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              Upcoming
              {_upcomingInterviews.length > 0 && (
                <span className="ml-2 bg-primary rounded-full px-2 py-0.5 text-xs">
                  {upcomingInterviews.length}
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger value="pending">
              Pending
              {_pendingInterviews.length > 0 && (
                <span className="ml-2 bg-amber-500 rounded-full px-2 py-0.5 text-xs">
                  {pendingInterviews.length}
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming" className="space-y-6">
            {_isLoading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
              </div>
            ) : upcomingInterviews.length > 0 ? (
              renderInterviewGroups(upcomingGrouped)
            ) : (
              <div className="text-center py-12 bg-zion-blue-dark/40 rounded-lg border border-zion-blue-light">
                <Video className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">No upcoming interviews</h3>
                <p className="text-muted-foreground mb-6">You don't have any scheduled interviews coming up.</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="pending" className="space-y-6">
            {_isLoading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
              </div>
            ) : pendingInterviews.length > 0 ? (
              renderInterviewGroups(pendingGrouped)
            ) : (
              <div className="text-center py-12 bg-zion-blue-dark/40 rounded-lg border border-zion-blue-light">
                <Clock className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">No pending interviews</h3>
                <p className="text-muted-foreground mb-6">You don't have any interview requests that need your attention.</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="past" className="space-y-6">
            {_isLoading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
              </div>
            ) : pastInterviews.length > 0 ? (
              renderInterviewGroups(pastGrouped)
            ) : (
              <div className="text-center py-12 bg-zion-blue-dark/40 rounded-lg border border-zion-blue-light">
                <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">No past interviews</h3>
                <p className="text-muted-foreground">Your interview history will appear here.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>
    </>
  );
}

export default function Interviews() {_return (
    <ProtectedRoute>
      <InterviewsContent />
    </ProtectedRoute>
  );}
