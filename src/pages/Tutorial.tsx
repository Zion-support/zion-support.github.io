 interface TutorialPageProps {;
  tutorial?: TutorialType ;
}export default function Tutorial ({;
  tutorial: initialTutorial ;
}: TutorialPageProps) {;
  const router = useRouter ();
const slug = router.query.slug as string | undefined;
const tutorial = initialTutorial || TUTORIALS.find ( (t) => t.slug === slug);
return (<div className="min-h-screen bg-zion-blue flex items-center justify-center text-white" > Tutorial not found. </div> <Button variant="outline" className="mb-8 border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white" asChild > <Link href="/tutorials" > <ArrowLeft className="mr-2 h-4 w-4" /> Back to Tutorials </Link> </Button> — {;
  typeof tutorial.author === 'string' ? tutorial.author : tutorial.author.name ;
}</p>) ;
}</div> </div> </>) ;
}'"