import Link from &quot;next/link&quot;;
import { useRouter } from &quot;next/router&quot;;
import { TUTORIALS } from &quot;@/data/tutorials&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { ArrowLeft } from 'lucide-react'
import ReactMarkdown from &quot;react-markdown&quot;;
import type { Tutorial as TutorialType } from &quot;@/types/tutorial&quot;;

interface TutorialPageProps {
  tutorial?: TutorialType;
}
export default function Tutorial({ tutorial: initialTutorial }: TutorialPageProps) {
  const router = useRouter();
  const slug = router.query.slug as string | undefined;
  const tutorial = initialTutorial || TUTORIALS.find((t) => t.slug === slug);

  if (!tutorial) {
    return (
      <div className=&quot;min-h-screen bg-zion-blue flex items-center justify-center text-white&quot;>
        Tutorial not found.
      </div>
    );
  }

  return (
    <>
      <SEO title={tutorial.title} description={tutorial.excerpt} />
      <div className=&quot;min-h-screen bg-zion-blue pt-12 pb-20 px-4&quot;>
        <div className=&quot;container mx-auto max-w-3xl&quot;>
          <Button
            variant=&quot;outline&quot;
            className=&quot;mb-8 border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white&quot;
            asChild
          >
            <Link href=&quot;/tutorials&quot;>
              <ArrowLeft className=&quot;mr-2 h-4 w-4&quot; /> Back to Tutorials
            </Link>
          </Button>
          <h1 className=&quot;text-3xl font-bold text-white mb-4&quot;>{tutorial.title}</h1>
          <p className=&quot;text-zion-slate-light mb-8&quot;>{tutorial.excerpt}</p>
          <div className=&quot;prose prose-invert&quot;>
            <ReactMarkdown>{tutorial.content}</ReactMarkdown>
          </div>
          {tutorial.author && (
            <p className=&quot;mt-8 text-white font-semibold&quot;>
              — {typeof tutorial.author === 'string' ? tutorial.author : tutorial.author.name}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
