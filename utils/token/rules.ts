import { TokenConfig } from &quot;./types&quot;;

export const DEFAULT_TOKEN_CONFIG: TokenConfig = {
  symbol: &quot;ZION$&quot;,
  usdPerToken: 0.05, // 100 ZION$ = $5 credit
  earnRules: {
    onboarding_complete: 50,
    referral_completed: 100,
    five_star_review: 75,
    job_application_submitted: 10,
    contract_completed: 250},
  burnRules: {
    boost_profile: 100,
    promote_job: 150,
    resume_ai_optimization: 80,
    featured_badge: 200}};