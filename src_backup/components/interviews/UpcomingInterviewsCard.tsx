











    load_interviews ();
  }, []);
  // Check condition
if ( {) {
  $2
}
    return (
      <Card className='bg - zion - blue - dark / 40 border - zion - blue - light'>;
        <CardHeader>;
          <CardTitle className='text - lg flex items - center'>;
            <Video className='h - 5 w - 5 mr - 2 text - zion - purple' />;
            Upcoming Interviews;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;






  }
  if (upcomingInterviews.length === 0) {
    return (
      <Card className='bg-zion-blue-dark/40 border-zion-blue-light'>
        <CardHeader>
          <CardTitle className='text-lg flex items-center'>
            <Video className='h-5 w-5 mr-2 text-zion-purple' />


          <div className='text-center py-6'>
            <Calendar className='h-10 w-10 mx-auto mb-2 text-muted-foreground' />
            <p className='text-sm text-muted-foreground'>
              No upcoming interviews scheduled
            </p>
            <Button asChild className='mt-4' variant='outline' size='sm'>
              <Link href='/interviews'>Schedule Interview</Link>






    <Card className='bg-zion-blue-dark/40 border-zion-blue-light'>;
      <CardHeader>;


        <div className="space-y-4">;
          {upcomingInterviews.map(interview => {;
            const interviewDate = parseISO(interview.scheduled_date),;
            const formattedDate = format(interviewDate, 'EEE, MMM d'),;
            const formattedTime = format(interviewDate, 'h:mm a'),;
            ;
            // Determine if interview is happening soon (within 30 minutes);
            const now = new Date(),;
            const isStartingSoon = ;
              interviewDate.getTime() - now.getTime() < 30 * 60 * 1000 &&;
              interviewDate.getTime() > now.getTime(),;
            ;
            return (;
              <div key={interview.id} className="flex items-center gap-3">;
                <Avatar className="h-10 w-10 bg-zion-purple/10">;
                  {interview.client_avatar || interview.talent_avatar ? (;
                    <img;
                      src={interview.client_avatar || interview.talent_avatar}
                      alt={interview.client_name || interview.talent_name}
                      loading="lazy";
                    />;
                  ) :(;
                    <div className="flex h-full w-full items-center justify-center bg-zion-purple/20 text-zion-purple font-medium">;
                      {(interview.client_name || interview.talent_name || "U").charAt(0)}
                    </div>;
                  )}
                </Avatar>;
                <div className="flex-1">;
                  <div className="flex justify-between items-start">;
                    <p className="font-medium line-clamp-1">;
                      {interview.title || "Interview"}
                    </p>;
                    {isStartingSoon && (;
                      <span className="text-xs px-1.5 py-0.5 bg-green-600/20 text-green-400 rounded-full animate-pulse">;
                        Soon;
                      </span>;
                    )}

    return (
      <Card className='bg - zion - blue - dark / 40 border - zion - blue - light'>;



