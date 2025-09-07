import { TokenConfig } from './types';

export const DEFAULT_TOKEN_CONFIG: TokenConfig & {
	usdPerToken?: number;
	earnRules?: Record<string, number>;
	burnRules?: Record<string, number>;
} = {
	usdPerToken: 0.05, // 100 tokens = $5 credit
	earnRules: {
		onboarding_complete: 50,
		referral_completed: 100,
		five_star_review: 75,
	},
	burnRules: {
		unlock_pro_feature: 150,
		download_report: 25,
	},
} as any;