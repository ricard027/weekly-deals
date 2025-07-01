import { useEffect, useRef, useCallback } from 'react';

/**
 * Custom hook for implementing lazy loading with Intersection Observer
 * 
 * @param onIntersect - Callback function to execute when element is intersected
 * @param enabled - Whether lazy loading is enabled
 * @returns Ref object to attach to the target element
 */
export function useLazyLoading(
    onIntersect: () => void,
    enabled: boolean = true
) {
    const observerRef = useRef<HTMLDivElement>(null);

    const handleIntersection = useCallback(
        (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && enabled) {
                    onIntersect();
                }
            });
        },
        [onIntersect, enabled]
    );

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.1,
        });

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }

        return () => observer.disconnect();
    }, [handleIntersection]);

    return observerRef;
} 