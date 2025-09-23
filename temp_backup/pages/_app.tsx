<<<<<<< HEAD
=======
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Layout from '../components/layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
>>>>>>> 8f0785411043 (chore: auto-resolve merge conflicts (keep incoming))
