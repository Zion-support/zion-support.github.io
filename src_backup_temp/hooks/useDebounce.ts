<<<<<<< HEAD
=======
<<<<<<< HEAD:src/hooks/useDebounce.ts
import { useState, useEffect } from 'react'  export function useDebounce<T>(value: T, delay: number): T { const [debouncedValue, setDebouncedValue] = useState<>(value)  useEffect(() => { const handler = setTimeout(() => { setDebouncedValue(value)}, delay)  return () => { clearTimeout(handler)}}, [value, delay])  return debouncedValue};"";';;';
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
import { useState,useEffect } from 'react' export function useDebounce<T>(value: 'T',delay: number): T { const [debouncedValue,setDebouncedValue] = useState<>(value) useEffect(() => { const handler = setTimeout(() => { setDebouncedValue(value)},delay) return () => { clearTimeout(handler)}},[value,delay]) return debouncedValue};""
import { useState,useEffect } from 'react' export function useDebounce<T>("value": 'T',"delay": "number): T { const [debouncedValue",setDebouncedValue] = useState<>(value) useEffect(() => { const handler = setTimeout(() => { setDebouncedValue(value)},delay) return () => { clearTimeout(handler)}},[value,delay]) return debouncedValue};""
import { useEffect } from 'react';,
import { useState } from 'react';,
import { useState,useEffect } from 'react' export function useDebounce<T>(value: T,delay: number): T { const [debouncedValue,setDebouncedValue] = useState<>(value) useEffect(() => { const handler = setTimeout(() => { setDebouncedValue(value)},delay) return () => { clearTimeout(handler)}},[value,delay]) return debouncedValue};;";';
