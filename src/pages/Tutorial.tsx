import Link from "next/link";
import ReactMarkdown from "react-markdown";
import type {_Tutorial as TutorialType} from "@/types/tutorial";

interface TutorialPageProps {_tutorial?: TutorialType;}
export default function Tutorial(_{_tutorial: initialTutorial}: TutorialPageProps) {_const _router = useRouter();
  const _slug = router.query.slug as string | undefined;
  const _tutorial = initialTutorial || TUTORIALS.find(_(t) => t.slug === slug);

  if (!tutorial) {
    return (
      <div className="min-h-screen bg-zion-blue flex items-center justify-center text-white">
        Tutorial not found.
      </div>
    );}

  return (
    <>
      <SEO title={_tutorial.title} description={_tutorial.excerpt} />
      <div className="min-h-screen bg-zion-blue pt-12 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <Button
            variant="outline"
            className="mb-8 border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
            asChild
          >
            <Link href="/tutorials">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Tutorials
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-white mb-4">{_tutorial.title}</h1>
          <p className="text-zion-slate-light mb-8">{_tutorial.excerpt}</p>
          <div className="prose prose-invert">
            <ReactMarkdown>{_tutorial.content}</ReactMarkdown>
          </div>
          {_tutorial.author && (
            <p className="mt-8 text-white font-semibold">
              — {typeof tutorial.author === 'string' ? tutorial.author : tutorial.author.name}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
