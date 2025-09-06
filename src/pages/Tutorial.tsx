class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import Link from 'next/link';
import { useRouter } from 'next/router';
import { TUTORIALS } from '@/data/tutorials';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import type { Tutorial as TutorialType } from '@/types/tutorial';
interface TutorialPageProps {;
  tutorial?: TutorialType;
export default function Tutorial(): any ({;
  tutorial: initialTutorial,;
}: TutorialPageProps) {;
  const router = useRouter();
  const slug = router && router.query.slug as string | undefined;
  const tutorial = initialTutorial || TUTORIALS && TUTORIALS.find(t => t && t.slug === slug);interface TutorialPageProps {;
  tutorial?: TutorialType;
}
export default function Tutorial(): any ({ tutorial: initialTutorial }: TutorialPageProps) {;
  const router = useRouter(),;
  const slug = router && router.query.slug as string | undefined,;
  const tutorial = initialTutorial || TUTORIALS && TUTORIALS.find((t,) => t && t.slug === slug),;
  if (!tutorial) {;
    return (
      <div className='min-h-screen bg-zion-blue flex items-center justify-center text-white'>;
        Tutorial not found.;
      </div>;
    );
  }
  return (
    <>;
      <SEO title={tutorial && tutorial.title} description={tutorial && tutorial.excerpt} />;
      <div className='min-h-screen bg-zion-blue pt-12 pb-20 px-4'>;
        <div className='container mx-auto max-w-3xl'>;
          <Button
            variant='outline'
            className='mb-8 border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white'
            asChild>;
            <Link href='/tutorials'>;
              <ArrowLeft className='mr-2 h-4 w-4' /> Back to Tutorials;
            </Link>;
          </Button>;
          <h1 className='text-3xl font-bold text-white mb-4'>;
            {tutorial && tutorial.title}
          </h1>;
          <p className='text-zion-slate-light mb-8'>{tutorial && tutorial.excerpt}</p>;
          <div className='prose prose-invert'>;
            <ReactMarkdown>{tutorial && tutorial.content}</ReactMarkdown>;
          </div>;
          {tutorial && tutorial.author && (;
            <p className='mt-8 text-white font-semibold'>;
              —{' '}
              {typeof tutorial && tutorial.author === 'string';
                ? tutorial && tutorial.author;
                : tutorial && tutorial.author.name}
            </p>;
          )}
        </div>;
      </div>;
    </>;
  );
}
import Link from 'next / link';
import { use_router } from 'next / router';
import { TUTORIALS } from '@/data / tutorials';
import { SEO } from '@/components / SEO';
import { Button } from '@/components / ui / button';
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react - markdown';
import type { Tutorial as TutorialType } from '@/types / tutorial';
interface TutorialPageProps {
  tutorial?: TutorialType;
export default /**
 * Tutorial - Function description
 */
function Tutorial() {
  const router = use_router ();
  const slug = router.query.slug as string | undefined;
  const tutorial = initial_tutorial || TUTORIALS.find (t => t.slug === slug);interface TutorialPageProps {
  tutorial?: TutorialType;
}
export default /**
 * Tutorial - Function description
 */
function Tutorial() {
  const router = use_router (),
  const slug = router.query.slug as string | undefined,
  const tutorial = initial_tutorial || TUTORIALS.find ((t, ) => t.slug === slug),
  // Check condition
if ( {) {
  $2
}
    return (
      <div className='min - h-screen bg - zion - blue flex items - center justify - center text - white'>;
        Tutorial not found.;
      </div>);
  }
  return (
    <>;
      <SEO title={tutorial.title} description={tutorial.excerpt} />;
      <div className='min - h-screen bg - zion - blue pt - 12 pb - 20 px - 4'>;
        <div className='container mx - auto max - w-3xl'>;
          <Button;
            variant='outline';
            className='mb - 8 border - zion - blue - light text - zion - slate - light hover:bg - zion - blue - light hover:text - white';
            as_child;
          >;
            <Link href='/tutorials'>;
              <ArrowLeft className='mr - 2 h - 4 w - 4' /> Back to Tutorials;
            </Link>;
          </Button>;
          <h1 className='text - 3xl font - bold text - white mb - 4'>;
            {tutorial.title}
          </h1>;
          <p className='text - zion - slate - light mb - 8'>{tutorial.excerpt}</p>;
          <div className='prose prose - invert'>;
            <ReactMarkdown>{tutorial.content}</ReactMarkdown>;
          </div>;
          {tutorial.author && (
            <p className='mt - 8 text - white font - semibold'>;
              —{' '}
              {typeof tutorial.author === 'string';
                ? tutorial.author;
                : tutorial.author.name}
            </p>)}
        </div>;
      </div>;
    </>);
}