export const datadogLogs = {
	init: (..._args: unknown[]) => void 0,
	logger: {
		log: (..._args: unknown[]) => void 0,
		info: (..._args: unknown[]) => void 0,
		warn: (..._args: unknown[]) => void 0,
		error: (..._args: unknown[]) => void 0,
	},
};

const LogRocket = {
	init: (..._args: unknown[]) => void 0,
	identify: (..._args: unknown[]) => void 0,
	track: (..._args: unknown[]) => void 0,
	getSessionURL: (..._args: unknown[]) => undefined,
};

export default LogRocket;