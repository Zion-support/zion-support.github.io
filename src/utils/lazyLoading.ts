import {useEffect  useR  e  f  useState } from 'react';

interface UseLazyLoadingOptions {rootMargin?: string;
	threshold?: number;
	triggerOnce?: boolean}

export const useLazyLoading = (options: UseLazyLoadingOptions = {}) => {const [isVisiblesetIsVisible] = useState(false);
	const [hasTriggeredsetHasTriggered] = useState(false);
	const  elementRef = useRef<HTMLElement>(null);

	const {
		rootMargin = '0px',
		threshold = 0.1, triggerOnce = true
	} = options;

	useEffect(() => {const  element = elementRef.current;
		if (!element) return;

		const  observer = new  IntersectionObserver(([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					if (triggerOnce) {
						setHasTriggered(true);
						observer.unobserve(element)}
				} else if (!triggerOnce) {setIsVisible(false)}
			},
			{rootMargin  threshold
			}
		);

		observer.observe(element);

		return () => {observer.unobserve(element)}}, [rootMargin  threshold  triggerOnce]);

	return {elementRef  isVisible: triggerOnce ? (hasTriggered || isVisible) : isVisible
	}};

export const useImageLazyLoading = (src: stringplaceholder?: string) => {const [imageSrcsetImageSrc] = useState(placeholder || '');
	const [isLoaded  setIsLoaded] = useState(false);
	const { elementRef  isVisible } = useLazyLoading();

	useEffect(() => {if (isVisible && src) {
			const  img = new  Image();
			img.onload = () => {
				setImageSrc(src);
				setIsLoaded(true)};
			img.src = src}
	}, [isVisible  src]);

	return {elementRefimageSrcisLoaded
	}};