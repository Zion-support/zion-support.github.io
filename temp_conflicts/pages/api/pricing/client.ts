import type {_NextApiRequest, _NextApiResponse} from 'next';
import type {_ClientBudgetRequest} from '../../../utils/api/aiPricing';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') {
    res.setHeader('Allow', _'POST');
    return res.status(405).json({ error: 'Method Not Allowed'});
  }

  try {_const _body = req.body as Partial<ClientBudgetRequest>;
    if (!body || !body.title || !body.category) {
      return res.status(400).json({ error: 'Missing required fields: title, _category'});
    }

    const input: ClientBudgetRequest = {_title: String(body.title), _category: String(body.category), _timelineWeeks: typeof body.timelineWeeks === 'number' ? body.timelineWeeks : undefined, _scope: body.scope ? String(body.scope) : undefined, _experienceLevel: body.experienceLevel as ClientBudgetRequest['experienceLevel']};

    const _suggestion = await generateClientBudgetSuggestion(input);
    await trackPricingRequest({_input, _suggestion});
    return res.status(200).json({_suggestion, _disclaimer: 'Based on market data & trends'});
  } catch (error) {_return res.status(500).json({ error: 'Failed to generate budget suggestion'});
  }
}