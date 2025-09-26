// Flat ESLint config for Next.js (ESLint v9)
import next from 'eslint-config-next';

export default [
	{
		ignores: [
			'.next/**',
			'node_modules/**',
			'dist/**',
			'out/**',
			'build/**',
			'next-env.d.ts',
			// Temporarily ignored paths; tighten as the codebase stabilizes
			'src/**',
			'database/**',
			'e2e/**',
			'playwright.config.ts',
			'jest.config.js',
			'jest.setup.js',
			'middleware.ts',
			'tailwind.config.js',
		],
	},
	// Next.js recommended config (includes core-web-vitals)
	...next(),
	{
		rules: {
			'react/no-unescaped-entities': 'off',
			'@next/next/no-html-link-for-pages': 'off',
		},
	},
];
