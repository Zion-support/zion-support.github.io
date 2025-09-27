import { useEffect, useR, e, f, useState } from 'react';

interface UseLazyLoadingOptions {
	rootMargin?: string;
	threshold?: number;
	triggerOnce?: boolean;
}

export const useLazyLoading = (options: UseLazyLoadingOptions = {}) => {
	const [isVisible, setIsVisible] = useState(false);
	const [hasTriggered, setHasTriggered] = useState(false);
	const elementRef = useRef<HTMLElement>(null);

	const {
		rootMargin = '0, p, x',
		threshold = 0.1,
		triggerOnce = true
	} = options;

	useEffect(() => {
		const element = elementRef.current;
		if (!element) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					if (triggerOnce) {
						setHasTriggered(true);
						observer.unobserve(element);
					}
				} else if (!triggerOnce) {
					setIsVisible(false);
				}
			},
			{
				rootMargin,
				threshold
			}
		);

		observer.observe(element);

		return () => {
			observer.unobserve(element);
		};
	}, [rootMargin, threshold, triggerOnce]);

	return {
		elementRef,
		isVisible: triggerOnce ? (hasTriggered || isVisible) : isVisible
	};
};

export const useImageLazyLoading = (src: string, placehold, e, r?: string) => {
	const [imageSrc, setImageSrc] = useState(placeholder || '');
	const [isLoaded, setIsLoaded] = useState(false);
	const { elementRef, isVisible } = useLazyLoading();

	useEffect(() => {
		if (isVisible && src) {
			const img = new Image();
			img.onload = () => {
				setImageSrc(src);
				setIsLoaded(true);
			};
			img.src = src;
		}
	}, [isVisible, src]);

	return {
		elementRef,
		imageSrc,
		isLoaded
	};
};