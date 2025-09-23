import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]';
<<<<<<< HEAD
export async function getStaticProps() {;
	return (getSlugStaticProps as any)({ params: { slug: 'ai-financial-planning-platform' } });
}

export default function AIFinancialPlanningPlatform(props: any) {;
=======

export async function getStaticProps() {
	return (getSlugStaticProps as any)({ params: { slug: 'ai-financial-planning-platform' } });
}

export default function AIFinancialPlanningPlatform(props: any) {
>>>>>>> origin/auto/autonomy-17186719616
	return <ServicePage {...props} />;
}