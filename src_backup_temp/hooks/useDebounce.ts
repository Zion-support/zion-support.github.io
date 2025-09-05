<<<<<<< HEAD:src/hooks/useDebounce.ts
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from 'react'  export function useDebounce<T>(value: T, delay: number): T { const [debouncedValue, setDebouncedValue] = useState<>(value)  useEffect(() => { const handler = setTimeout(() => { setDebouncedValue(value)}, delay)  return () => { clearTimeout(handler)}}, [value, delay])  return debouncedValue};"";';;';
=======
import { useState,useEffect } from 'react' export function useDebounce<T>(value: 'T',delay: number): T { const [debouncedValue,setDebouncedValue] = useState<>(value) useEffect(() => { const handler = setTimeout(() => { setDebouncedValue(value)},delay) return () => { clearTimeout(handler)}},[value,delay]) return debouncedValue};""
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
=======
import { useState,useEffect } from 'react' export function useDebounce<T>("value": 'T',"delay": "number): T { const [debouncedValue",setDebouncedValue] = useState<>(value) useEffect(() => { const handler = setTimeout(() => { setDebouncedValue(value)},delay) return () => { clearTimeout(handler)}},[value,delay]) return debouncedValue};""
=======
<<<<<<< HEAD
import { useState,useEffect } from &apos;react&apos; export function useDebounce<T>(value: T,delay: number): T { const [debouncedValue,setDebouncedValue] = useState<>(value) useEffect(() => { const handler = setTimeout(() => { setDebouncedValue(value)},delay) return () => { clearTimeout(handler)}},[value,delay]) return debouncedValue};;&quot;;&apos;;
=======
<<<<<<< HEAD
const { useState,useEffect } from "react" export function useDebounce<T>(value: T,delay: number): T { const [debouncedValue,setDebouncedValue] = useState<>(value) useEffect(() => { const handler = setTimeout(() => { setDebouncedValue(value)},delay) return () => { clearTimeout(handler)}},[value,delay]) return debouncedValue};";";"""
=======
import { useEffect } from 'react';,
import { useState } from 'react';,
import { useState,useEffect } from 'react' export function useDebounce<T>(value: T,delay: number): T { const [debouncedValue,setDebouncedValue] = useState<>(value) useEffect(() => { const handler = setTimeout(() => { setDebouncedValue(value)},delay) return () => { clearTimeout(handler)}},[value,delay]) return debouncedValue};;";';
>>>>>>> main
>>>>>>> main:src_backup_temp/hooks/useDebounce.ts
>>>>>>> main
>>>>>>> main
>>>>>>> main
