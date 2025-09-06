 <Head> <title>Post a Job - Zion</title> </Head> <h1 className="text-2xl font-semibold" >Post a Job</h1> <div className="grid md:grid-cols-2 gap-6" > <form className="space-y-4" > <div> </EnhancedButton> <EnhancedButton type="submit" >Post Job</EnhancedButton> </div> </form> <div> <div className="text-sm opacity-70" >Title</div> <div className="font-medium" > {
  title || 'Untitled job' 
}</div> </div> <div> </div> </div>) : (<p className="text-sm opacity-80" >Click Preview to see how your job will appear to talent.</p>) 
}</aside> </div> </div>) 
};
export default PostJob;
