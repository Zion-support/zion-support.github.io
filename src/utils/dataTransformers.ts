'use client'
/**
 * Data Transformation Utilities;
 * Provides utilities for transforming and formatting data;
 */
 * Deep clone an object;
export function deepClone<T>(obj: T): T {
    <T>(obj: T): T {<T extends Record<string, unknown>>(target: T, source: Partial<T>): T {
    <T extends Record<string, unknown>>(target: T, source: Partial<T>): T {<string, unknown>,
<string, unknown>
        ) as T[Extract<keyof T, string>]
      } else {
    <keyof T, string>]
        ) as T[Extract<keyof T, string>];
      } else {<keyof T, string>];
      }
  return output
 * Flatten a nested object;
export function flattenObject()
  obj: Record;
          <string, unknown>,
  prefix = '',
  separator = '.'
): Record<string, unknown> {
    <string, unknown> = {}
  for (const key in obj) {
    <string, unknown> {<string, unknown> = {};
  for (const key in obj) {<string, unknown>, newKey, separator)
        )
    < keys.length; i++) {
): Record<string, unknown> {<string, unknown> = {};
  for (const key in obj) {< keys.length; i++) {<string, unknown>;
  return result
 * Pick specific keys from an object;
export function pick<T extends Record<string, unknown>, K extends keyof T>()
  obj: T,
  keys: K[]
): Pick
          <T, K> {
    <T, K>
  keys.forEach(key => {
    <T, K> {<T, K>;
  keys.forEach(key => {<T extends Record<string, unknown>, K extends keyof T>()
): Omit
): Omit;
 * Group array items by a key;
export function groupBy<T>()
  array: T[],
  key: keyof T | ((item: T) => string | number)
): Record
          <string, T[]> {
    <string, T[]> {<string, T[]>
 * Get unique items from an array;
export function unique<T>(array: T[], key?: keyof T): T[] {
    <T>(array: T[], key?: keyof T): T[] {<T>()
  keys: Array;
          <keyof T | ((item: T) => unknown)>,
  orders: Array<'asc' | 'desc'> = []
): T[] {
    < keys.length; i++) {< bComp) return order === 'asc' ? -1 : 1
      if (aComp > bComp) return order === 'asc' ? 1 : -1
< bComp) return order === 'asc' ? -1 : 1;
      if (aComp > bComp) return order === 'asc' ? 1 : -1;
    return 0
 * Chunk array into smaller arrays;
export function chunk<T>(array: T[], size: number): T[][] {
    < array.length; i += size) {
    <T>(array: T[], size: number): T[][] {< array.length; i += size) {<T>(...arrays: T[][]): T[][] {
    < length; i++) {
    <T>(...arrays: T[][]): T[][] {< length; i++) {< 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
export function formatBytes(bytes: number, decimals = 2): string {< 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
 * Format number with separators;
export function formatNumber(num: number, locale = 'en-US'): string {
    < 60) return 'just now'
  if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
  if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`
  if (days < 7) return `${days} day${days > 1 ? 's' : ''} ago`
  if (weeks < 4) return `${weeks} week${weeks > 1 ? 's' : ''} ago`
  if (months < 12) return `${months} month${months > 1 ? 's' : ''} ago`
  return `${years} year${years > 1 ? 's' : ''} ago`
export function formatRelativeTime(date: Date | string | number): string {< 60) return 'just now';
  if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  if (days < 7) return `${days} day${days > 1 ? 's' : ''} ago`;
  if (weeks < 4) return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
  if (months < 12) return `${months} month${months > 1 ? 's' : ''} ago`;
  return `${years} year${years > 1 ? 's' : ''} ago`;
 * Truncate string;
export function truncate(str: string, length: number, suffix = '...'): string {
    <= length) return str
  return str.substring(0, length - suffix.length) + suffix
export function truncate(str: string, length: number, suffix = '...'): string {<= length) return str;
  return str.substring(0, length - suffix.length) + suffix;
 * Capitalize first letter;
export function capitalize(str: string): string {
    
}}}}}}}}}}}}}}}}}}}}}}}}