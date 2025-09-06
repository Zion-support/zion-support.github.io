interface TutorialPageProps {
  tutorial?: TutorialType
export default function Tutorial({
  tutorial: initialTutorial,;
}: TutorialPageProps) {;
  const router = useRouter();
  const slug = router.query.slug as string | undefined;
  const tutorial = initialTutorial || TUTORIALS.find(t => t.slug === slug);interface TutorialPageProps {
  tutorial?: TutorialType
}
export default function Tutorial({ tutorial: initialTutorial }: TutorialPageProps) {

  const router = useRouter()
  const slug = router.query.slug as string | undefined
  const tutorial = initialTutorial |TUTORIALS.find((t,) => t.slug === slug)


            <p className="mt-8 text-white font-semibold">
import Link from "next/link",;
import { useRouter } from "next/router",;
import { TUTORIALS } from "@/data/tutorials",;
import { SEO } from "@/components/SEO",;
import { Button } from "@/components/ui/button",;
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from "react-markdown",;
import type { Tutorial as TutorialType } from "@/types/tutorial",;
interface TutorialPageProps {;
  tutorial?: TutorialType;
}
export default function Tutorial({ tutorial: initialTutorial }: TutorialPageProps) {;
  const router = useRouter(),;
  const slug = router.query.slug as string | undefined;
  const tutorial = initialTutorial || TUTORIALS.find((t) => t.slug === slug);
  if (!tutorial) {;
    return (;
      <div className="min-h-screen bg-zion-blue flex items-center justify-center text-white">;
    return (
      <div className="min-h-screen bg-zion-blue flex items-center justify-center text-white">
        Tutorial not found.
      </div>
    )
  }
  return (
