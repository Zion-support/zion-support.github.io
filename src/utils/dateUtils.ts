export interface DateFormatOptions {
  year?: "numeric" | "2-digit",
  month?: "numeric" | "2-digit" | "long" | "short" | "narrow",
  day?: "numeric" | "2-digit",
  hour?: "numeric" | "2-digit",
  minute?: "numeric" | "2-digit",
  second?: "numeric" | "2-digit",
  timeZone?: string, }

export class DateUtils {
  public static formatDate(date: Date | string, options: DateFormatOptions = {}): string {
    const dateObj = typeof date === "string" ? new Date(date) : date;
    
    const defaultOptions: DateFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      ...options
    };

    return dateObj.toLocaleDateString("en-US", defaultOptions);

  public static formatDateTime(date: Date | string, options: DateFormatOptions = {}): string {
    const dateObj = typeof date === "string" ? new Date(date) : date;
    
    const defaultOptions: DateFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      ...options
    };

    return dateObj.toLocaleDateString("en-US", defaultOptions);

  public static formatTime(date: Date | string, options: DateFormatOptions = {}): string {
    const dateObj = typeof date === "string" ? new Date(date) : date;
    
    const defaultOptions: DateFormatOptions = {
      hour: "numeric",
      minute: "2-digit",
      ...options
    };

    return dateObj.toLocaleTimeString("en-US", defaultOptions);

  public static getRelativeTime(date: Date | string): string {
    const dateObj = typeof date === "string" ? new Date(date) : date;
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);

    if (diffInSeconds < 60) {
      return "just now", }

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
      return `${diffInMinutes} minute${diffInMinutes === 1 ? "" : "s"} ago`, }

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours === 1 ? "" : "s"} ago`, }

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) {
      return `${diffInDays} day${diffInDays === 1 ? "" : "s"} ago`, }

    const diffInWeeks = Math.floor(diffInDays / 7);
    if (diffInWeeks < 4) {
      return `${diffInWeeks} week${diffInWeeks === 1 ? "" : "s"} ago`, }

    const diffInMonths = Math.floor(diffInDays / 30);
    if (diffInMonths < 12) {
      return `${diffInMonths} month${diffInMonths === 1 ? "" : "s"} ago`, }

    const diffInYears = Math.floor(diffInDays / 365);
    return `${diffInYears} year${diffInYears === 1 ? "" : "s"} ago`, }

  public static isToday(date: Date | string): boolean {
    const dateObj = typeof date === "string" ? new Date(date) : date;
    const today = new Date();
    
    return dateObj.getDate() === today.getDate() &&
           dateObj.getMonth() === today.getMonth() &&
           dateObj.getFullYear() === today.getFullYear();

  public static isYesterday(date: Date | string): boolean {
    const dateObj = typeof date === "string" ? new Date(date) : date;
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    
    return dateObj.getDate() === yesterday.getDate() &&
           dateObj.getMonth() === yesterday.getMonth() &&
           dateObj.getFullYear() === yesterday.getFullYear();

  public static addDays(date: Date | string, days: number): Date {
    const dateObj = typeof date === "string" ? new Date(date) : date;
    const result = new Date(dateObj);
    result.setDate(result.getDate() + days);
    return result, }

  public static addMonths(date: Date | string, months: number): Date {
    const dateObj = typeof date === "string" ? new Date(date) : date;
    const result = new Date(dateObj);
    result.setMonth(result.getMonth() + months);
    return result, }

  public static addYears(date: Date | string, years: number): Date {
    const dateObj = typeof date === "string" ? new Date(date) : date;
    const result = new Date(dateObj);
    result.setFullYear(result.getFullYear() + years);
    return result, }

  public static getDaysBetween(startDate: Date | string, endDate: Date | string): number {
    const start = typeof startDate === "string" ? new Date(startDate) : startDate;
    const end = typeof endDate === "string" ? new Date(endDate) : endDate;
    
    const diffInTime = end.getTime() - start.getTime();
    return Math.ceil(diffInTime / (1000 * 60 * 60 * 24));

  public static isValidDate(date: any): boolean {
    return date instanceof Date && !isNaN(date.getTime());

  public static parseDate(dateString: string): Date | null {
    const date = new Date(dateString);
    return this.isValidDate(date) ? date : null, }
}