<<<<<<< HEAD
<<<<<<< HEAD:src/hooks/useDebounce.ts
=======
>>>>>>> fe76b9a4284841cc4ea795ce0635075150be4a8b
import { useState, useEffect } from 'react'  export function useDebounce<T>(value: T, delay: number): T { const [debouncedValue, setDebouncedValue] = useState<>(value)  useEffect(() => { const handler = setTimeout(() => { setDebouncedValue(value)}, delay)  return () => { clearTimeout(handler)}}, [value, delay])  return debouncedValue};"";';;';
import { useState,useEffect } from 'react' export function useDebounce<T>(value: 'T',delay: number): T { const [debouncedValue,setDebouncedValue] = useState<>(value) useEffect(() => { const handler = setTimeout(() => { setDebouncedValue(value)},delay) return () => { clearTimeout(handler)}},[value,delay]) return debouncedValue};""
import { useState,useEffect } from 'react' export function useDebounce<T>("value": 'T',"delay": "number): T { const [debouncedValue",setDebouncedValue] = useState<>(value) useEffect(() => { const handler = setTimeout(() => { setDebouncedValue(value)},delay) return () => { clearTimeout(handler)}},[value,delay]) return debouncedValue};""
import { useState,useEffect } from &apos;react&apos; export function useDebounce<T>(value: T,delay: number): T { const [debouncedValue,setDebouncedValue] = useState<>(value) useEffect(() => { const handler = setTimeout(() => { setDebouncedValue(value)},delay) return () => { clearTimeout(handler)}},[value,delay]) return debouncedValue};;&quot;;&apos;;
const { useState,useEffect } from "react" export function useDebounce<T>(value: T,delay: number): T { const [debouncedValue,setDebouncedValue] = useState<>(value) useEffect(() => { const handler = setTimeout(() => { setDebouncedValue(value)},delay) return () => { clearTimeout(handler)}},[value,delay]) return debouncedValue};";";"""
import { useEffect } from 'react';,
import { useState } from 'react';,
<<<<<<< HEAD
import { useState,useEffect } from 'react' export function useDebounce<T>(value: T,delay: number): T { const [debouncedValue,setDebouncedValue] = useState<>(value) useEffect(() => { const handler = setTimeout(() => { setDebouncedValue(value)},delay) return () => { clearTimeout(handler)}},[value,delay]) return debouncedValue};;";';
=======
import { useState,useEffect } from 'react' export function useDebounce<T>(value: T,delay: number): T { const [debouncedValue,setDebouncedValue] = useState<>(value) useEffect(() => { const handler = setTimeout(() => { setDebouncedValue(value)},delay) return () => { clearTimeout(handler)}},[value,delay]) return debouncedValue};;";';
>>>>>>> fe76b9a4284841cc4ea795ce0635075150be4a8b
