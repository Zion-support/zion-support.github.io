 const {
  markSlackConnected 
}= useAdvancedOnboardingStatus ();
useEffect ( () => {
  markSlackConnected () 
}, [markSlackConnected]);
API & Integrations"description=" Extend Zion by embedding widgets or using our REST API for custom workflows."keywords=" Zion API, Slack integration, embed widget"canonical=" https://app.ziontechgroup.com/features/integrations"/> {
  /* Use a normal script tag so JSON-LD is correctly parsed */ 
}<script ></script> <Header /> Automate your workflows by connecting Zion with the tools you already use. </p> <div className=" relative w-full h-auto aspect-video mx-auto mb-12 rounded-lg shadow-xl overflow-hidden"> <img src=" https://placehold.co/800x400"alt=" Screenshot showing integrations"className=" object-cover"/> </div> <li>Trigger Slack notifications for new orders or messages.</li> <li>Embed talent search or job listings directly on your site.</li> <li>Build custom analytics by pulling data from our REST endpoints.</li> </ul> <h2 className=" text-2xl font-bold mb-4">Frequently Asked Questions</h2> <div className=" space-y-4 mb-12"> <div> <p className=" font-semibold">Where can I find the API docs?</p> <p className=" text-zion-slate-light">Visit our Developer Portal for authentication guides and endpoint references.</p> </div> <div> <p className=" font-semibold">Is there a rate limit?</p> <p className=" text-zion-slate-light">Yes, free tier requests are limited per hour. Contact sales for higher limits.</p> </div> </div> <div className=" text-center"> <Button size=" lg"className=" bg-zion-purple text-white"asChild> <Link href=" /developers" >Learn More</Link> </Button> </div> </div> </main> </>) 
}