// Minimal Stripe SDK mock for CI/Netlify builds
// Provides commonly used namespaces with no-op async methods

export default class Stripe {
	apiVersion?: string;
	constructor(_secretKey?: string, _config?: { apiVersion?: string }) {
		this.apiVersion = _config?.apiVersion;
	}
	checkout = {
		sessions: {
			create: async (_params: any) => ({ id: 'sess_mock_123' }),
			retrieve: async (_id: string) => ({ id: 'sess_mock_123', payment_status: 'paid' }),
		},
	};
	paymentIntents = {
		create: async (_params: any) => ({ id: 'pi_mock_123', client_secret: 'pi_mock_secret' }),
		retrieve: async (_id: string) => ({ id: 'pi_mock_123', status: 'succeeded' }),
	};
	webhooks = {
		constructEvent: (_payload: any, _signature: string, _secret: string) => ({ id: 'evt_mock_123' }),
	};
}