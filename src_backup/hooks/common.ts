import { useState, useEffect, useCallback  } from 'react';
// Custom hook for local storage;
export const useLocalStorage = <T>(key: string, initialValue: T) => {const [storedValue, setStoredValue] = useState<T>(() => {if (typeof window === 'undefined') {return initialValue;
    }
    try {const item = window.localStorage.getItem(key)return item ? JSON.parse(item) : initialValue;
    } catch (error) {console.error(`Error reading localStorage key '${key}':`, error)return initialValue;
    }
  })const setValue = useCallback((value: T | ((val: T) => T)) => {try {const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore)if (typeof window !== 'undefined') {window.localStorage.setItem(key, JSON.stringify(valueToStore))}
    } catch (error) {console.error(`Error setting localStorage key '${key}':`, error)}
  }, [key, storedValue])return [storedValue, setValue] as const;
}// Custom hook for debounced value;
export const useDebounce = <T>(value: T, delay: number): T => {const [debouncedValue, setDebouncedValue]  = useState<T>(value)useEffect(() => {const handler = setTimeout(() => {setDebouncedValue(value)}, delay)return () => {clearTimeout(handler)}, [value, delay])return debouncedValue;
}// Custom hook for API calls;
export const useApi = <T>(url: string, options?: RequestInit) => {const [data, setData] = useState<T | null>(null)const [loading, setLoading] = useState(true)const [error, setError]  = useState<string | null>(null)useEffect(() => {const fetchData = async () => {try {setLoading(true)setError(null)const response  = await fetch(url, options)if (!response.ok) {throw new Error(`HTTP error! status: ${response.status}`)}const result = await response.json()setData(result)} catch (err) {setError(err instanceof Error ? err.message : 'An error occurred')} finally {setLoading(false)}
    }fetchData()}, [url, JSON.stringify(options)])return { data, loading, error }// Custom hook for window size;
export const useWindowSize = () => {const [windowSize, setWindowSize] = useState({width: typeof window !== 'undefined' ? window.innerWidth : 0,height: typeof window !== 'undefined' ? window.innerHeight : 0})useEffect(() => {if (typeof window === 'undefined') return;const handleResize = () => {setWindowSize({width: window.innerWidth,height: window.innerHeight})}window.addEventListener('resize', handleResize)return () => window.removeEventListener('resize', handleResize)}, [])return windowSize;
}// Custom hook for click outside;
export const useClickOutside = (ref: React.RefObject<HTMLElement>, callback: () => void) => {useEffect(() => {const handleClickOutside = (event: MouseEvent) => {if (ref.current && !ref.current.contains(event.target as Node)) {callback()}
    }document.addEventListener('mousedown', handleClickOutside)return () => {document.removeEventListener('mousedown', handleClickOutside)}, [ref, callback])}