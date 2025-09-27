/**
 * Comprehensive error handling utilities
 * Provides comprehensive error management functions
 */

import React from 'react';

export interface ErrorInfo {
	message: string;
	stack?: string;
	componentStack?: string;
	errorBoundary?: string;
	timestamp: number;
	url?: string;
	userAgent?: string;
}

export class ErrorHandler {
	private static instance: ErrorHandler;
	private errors: ErrorInfo[] = [];

	static getInstance(): ErrorHandler {
		if (!ErrorHandler.instance) {
			ErrorHandler.instance = new ErrorHandler();
		}
		return ErrorHandler.instance;
	}

	reportError(error: Error, errorInfo?: Partial<ErrorInfo>) {
		const errorData: ErrorInfo = {
			message: error.message,
			stack: error.stack,
			timestamp: Date.now(),
			url: typeof window !== 'undefined' ? window.location.href : undefined,
			userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined,
			...errorInfo,
		};

		this.errors.push(errorData);

		// Log to console in development
		if (process.env.NODE_ENV === 'development') {
			console.error('Error reported:', errorData);
		}

		// Send to error reporting service in production
		if (process.env.NODE_ENV === 'production') {
			this.sendToErrorService(errorData);
		}
	}

	private sendToErrorService(errorData: ErrorInfo) {
		// In a real implementation, this would send to a service like Sentry
		fetch('/api/error-reporting', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(errorData),
		}).catch((err) => {
			console.error('Failed to send error to service:', err);
		});
	}

	getErrors(): ErrorInfo[] {
		return [...this.errors];
	}

	clearErrors(): void {
		this.errors = [];
	}
}

export const errorHandler = ErrorHandler.getInstance();

export function setupGlobalErrorHandling() {
	if (typeof window !== 'undefined') {
		window.addEventListener('error', (event) => {
			errorHandler.reportError(event.error, {
				message: event.message,
				timestamp: Date.now(),
				url: window.location.href
			});
		});

		window.addEventListener('unhandledrejection', (event) => {
			errorHandler.reportError(new Error(event.reason), {
				message: `Unhandled Promise Rejection: ${event.reason}`,
				timestamp: Date.now(),
				url: window.location.href
			});
		});
	}
}

export function createErrorBoundary(errorCallback?: (error: Error, errorInfo: ErrorInfo) => void) {
	return class ErrorBoundary extends React.Component<
		{ children: React.ReactNode },
		{ hasError: boolean; error?: Error }
	> {
		constructor(props: { children: React.ReactNode }) {
			super(props);
			this.state = { hasError: false };
		}

		static getDerivedStateFromError(error: Error) {
			return { hasError: true, error };
		}

		componentDidCatch(error: Error, errorInfo: any) {
			const errorData: ErrorInfo = {
				message: error.message,
				stack: error.stack,
				componentStack: errorInfo.componentStack,
				timestamp: Date.now(),
			};

			errorHandler.reportError(error, errorData);
			errorCallback?.(error, errorData);
		}

		render() {
			if (this.state.hasError) {
				return React.createElement('div', { className: 'error-boundary' },
					React.createElement('h2', null, 'Something went wrong.'),
					React.createElement('button', { onClick: () => this.setState({ hasError: false }) }, 'Try again')
				);
			}

			return this.props.children;
		}
	};
}