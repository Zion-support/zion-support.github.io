<<<<<<< HEAD
<<<<<<< HEAD
import Link from "next/link",
import { useRouter } from "next/router",
import { TUTORIALS } from "@/data/tutorials",
import { SEO } from "@/components/SEO",
import { Button } from "@/components/ui/button",
import { ArrowLeft } from 'lucide-react'
import ReactMarkdown from "react-markdown",
import type { Tutorial as TutorialType } from "@/types/tutorial",
=======
import Link from &quot;next/link&quot;;
import { useRouter } from &quot;next/router&quot;;
import { TUTORIALS } from &quot;@/data/tutorials&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { ArrowLeft } from 'lucide-react'
import ReactMarkdown from &quot;react-markdown&quot;;
import type { Tutorial as TutorialType } from &quot;@/types/tutorial&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface TutorialPageProps {
  tutorial?: TutorialType
}
export default function Tutorial({ tutorial: initialTutorial }: TutorialPageProps) {
  const router = useRouter(),
  const slug = router.query.slug as string | undefined,
  const tutorial = initialTutorial || TUTORIALS.find((t) => t.slug === slug),
=======
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import type {_Tutorial as TutorialType} from "@/types/tutorial";

interface TutorialPageProps {_tutorial?: TutorialType;}
export default function Tutorial(_{_tutorial: initialTutorial}: TutorialPageProps) {_const _router = useRouter();
  const _slug = router.query.slug as string | undefined;
  const _tutorial = initialTutorial || TUTORIALS.find(_(t) => t.slug === slug);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  if (!tutorial) {
    return (
      <div className=&quot;min-h-screen bg-zion-blue flex items-center justify-center text-white&quot;>
        Tutorial not found.
      </div>
<<<<<<< HEAD
    )
  }

  return (
    <>
      <SEO title={tutorial.title} description={tutorial.excerpt} />
      <div className=&quot;min-h-screen bg-zion-blue pt-12 pb-20 px-4&quot;>
        <div className=&quot;container mx-auto max-w-3xl&quot;>
=======
    );}

  return (
    <>
      <SEO title={_tutorial.title} description={_tutorial.excerpt} />
      <div className="min-h-screen bg-zion-blue pt-12 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <Button
            variant=&quot;outline&quot;
            className=&quot;mb-8 border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white&quot;
            asChild
          >
            <Link href=&quot;/tutorials&quot;>
              <ArrowLeft className=&quot;mr-2 h-4 w-4&quot; /> Back to Tutorials
            </Link>
          </Button>
<<<<<<< HEAD
          <h1 className=&quot;text-3xl font-bold text-white mb-4&quot;>{tutorial.title}</h1>
          <p className=&quot;text-zion-slate-light mb-8&quot;>{tutorial.excerpt}</p>
          <div className=&quot;prose prose-invert&quot;>
            <ReactMarkdown>{tutorial.content}</ReactMarkdown>
          </div>
          {tutorial.author && (
            <p className=&quot;mt-8 text-white font-semibold&quot;>
=======
          <h1 className="text-3xl font-bold text-white mb-4">{_tutorial.title}</h1>
          <p className="text-zion-slate-light mb-8">{_tutorial.excerpt}</p>
          <div className="prose prose-invert">
            <ReactMarkdown>{_tutorial.content}</ReactMarkdown>
          </div>
          {_tutorial.author && (
            <p className="mt-8 text-white font-semibold">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              — {typeof tutorial.author === 'string' ? tutorial.author : tutorial.author.name}
            </p>
          )}
        </div>
      </div>
    </>
  )
}
