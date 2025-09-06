 <Head> <title>Dashboard - Zion</title> </Head> <h1 className="text-2xl font-semibold" >Dashboard</h1> <section> <h2 className="text-lg font-semibold mb-2" >My Jobs</h2> <EmptyState title="No jobs yet" description="Post your first job to get quotes from top talent." icon= {
  <span>🧰</span> 
}primaryAction= {
  {
  label: 'Post a job', href: '/jobs/post' 
}
}secondaryAction= {
  {
  label: 'Explore talent', href: '/talent' 
}
}/> </section> <section> <h2 className="text-lg font-semibold mb-2" >Messages</h2> <EmptyState /> </section> </div>) 
};
export default Dashboard;
