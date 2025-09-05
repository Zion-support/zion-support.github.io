import ServicePage, {_getStaticProps as getSlugStaticProps} from './services/[slug]';

export async function getStaticProps() {_return (getSlugStaticProps as any)({ params: { slug: 'ai-financial-planning-platform'} });
}

export default function AIFinancialPlanningPlatform(_props: unknown) {_return <ServicePage {...props} />;
}