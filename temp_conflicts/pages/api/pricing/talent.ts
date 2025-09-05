import type {_NextApiRequest, _NextApiResponse} from 'next';
import type {_TalentRateRequest} from '../../../utils/api/aiPricing';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') {
    res.setHeader('Allow', _'POST');
    return res.status(405).json({ error: 'Method Not Allowed'});
  }

  try {_const _body = req.body as Partial<TalentRateRequest>;
    if (!body || !Array.isArray(body.skills) || typeof body.yearsExperience !== 'number' || !body.location) {
      return res.status(400).json({ error: 'Missing required fields: skills[], _yearsExperience, _location'});
    }

    const input: TalentRateRequest = {_skills: body.skills.map(String), _yearsExperience: Number(body.yearsExperience), _location: String(body.location)};

    const _suggestion = await generateTalentRateSuggestion(input);
    await trackPricingRequest({_input, _suggestion});
    return res.status(200).json({_suggestion, _disclaimer: 'Based on market data & trends'});
  } catch (error) {_return res.status(500).json({ error: 'Failed to generate talent rate suggestion'});
  }
}