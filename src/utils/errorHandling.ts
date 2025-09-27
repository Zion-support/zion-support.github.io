/**
 * Enhanced error handling utilities
 * Provides comprehensive error management functions
 */

export interface ErrorInfo {
	message: string;
	stack?: string;
	componentStack?: string;
	errorBoundary?: string;
	timestamp: string;
	userAgent: string;
	url: string;
	userId?: string;
	sessionId?: string;
}

export interface ErrorContext {
	componentName?: string;
	props?: Record<string, any>;
	state?: Record<string, any>;
	errorBoundary?: string;
}

export class ErrorHandler {
	private static instance: ErrorHandler;
	private errorLog: ErrorInfo[] = [];
	private maxLogSize = 100;

	private constructor() {}

	public static getInstance(): ErrorHandler {
		if (!ErrorHandler.instance) {
			ErrorHandler.instance = new ErrorHandler();
		}
		return ErrorHandler.instance;
	}

	public logError(error: Error, errorInfo?: ErrorContext): void {
		const errorData: ErrorInfo = {
			message: error.message,
			stack: error.stack,
			componentStack: errorInfo?.componentStack,
			errorBoundary: errorInfo?.errorBoundary,
			timestamp: new Date().toISOString(),
			userAgent: typeof window !== "undefined" ? window.navigator.userAgent : "Server",
			url: typeof window !== "undefined" ? window.location.href : "Server",
			userId: this.getUserId(),
			sessionId: this.getSessionId()
		};

		this.errorLog.push(errorData);
		
		// Keep only the last maxLogSize errors
		if (this.errorLog.length > this.maxLogSize) {
			this.errorLog = this.errorLog.slice(-this.maxLogSize);
		}

		// Log to console in development
		if (process.env.NODE_ENV === "development") {
			console.error("Error logged:", errorData);
		}

		// Send to error reporting service in production
		if (process.env.NODE_ENV === "production") {
			this.sendToErrorService(errorData);
		}
	}

	public getErrors(): ErrorInfo[] {
		return [...this.errorLog];
	}

	public clearErrors(): void {
		this.errorLog = [];
	}

	private getUserId(): string | undefined {
		// Implement user ID retrieval logic
		return undefined;
	}

	private getSessionId(): string | undefined {
		// Implement session ID retrieval logic
		return undefined;
	}

	private sendToErrorService(errorData: ErrorInfo): void {
		// Implement error reporting service integration
		// This could be Sentry, LogRocket, or any other service
		console.log("Sending error to service:", errorData);
	}
}

export const errorHandler = ErrorHandler.getInstance();

export const handleError = (error: Error, errorInfo?: ErrorContext): void => {
	errorHandler.logError(error, errorInfo);
};

export const getErrorLog = (): ErrorInfo[] => {
	return errorHandler.getErrors();
};

export const clearErrorLog = (): void => {
	errorHandler.clearErrors();
};

export const setupGlobalErrorHandling = (): void => {
	// Set up global error handlers
	if (typeof window !== "undefined") {
		// Handle unhandled promise rejections
		window.addEventListener('unhandledrejection', (event) => {
			console.error('Unhandled promise rejection:', event.reason);
			errorHandler.logError(new Error(event.reason), {
				componentName: 'Global',
				errorBoundary: 'unhandledrejection'
			});
		});

		// Handle uncaught errors
		window.addEventListener('error', (event) => {
			console.error('Uncaught error:', event.error);
			errorHandler.logError(event.error, {
				componentName: 'Global',
				errorBoundary: 'uncaught'
			});
		});
	}
};