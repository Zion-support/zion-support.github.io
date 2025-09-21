export class NumberUtils {
  public static formatNumber(num: number, options: Intl.NumberFormatOptions = {}): string {
    return new Intl.NumberFormat("en-US", options).format(num);
  }

  public static formatCurrency(amount: number, currency: string = "USD", options: Intl.NumberFormatOptions = {}): string {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      ...options
    }).format(amount);
  }

  public static formatPercentage(value: number, options: Intl.NumberFormatOptions = {}): string {
    return new Intl.NumberFormat("en-US", {
      style: "percent",
      ...options
    }).format(value / 100);
  }

  public static formatBytes(bytes: number, decimals: number = 2): string {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  public static clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
  }

  public static lerp(start: number, end: number, t: number): number {
    return start + (end - start) * t;
  }

  public static inverseLerp(start: number, end: number, value: number): number {
    return (value - start) / (end - start);
  }

  public static roundToNearest(value: number, nearest: number): number {
    return Math.round(value / nearest) * nearest;
  }

  public static roundToDecimal(value: number, decimals: number): number {
    const factor = Math.pow(10, decimals);
    return Math.round(value * factor) / factor;
  }

  public static isEven(num: number): boolean {
    return num % 2 === 0;
  }

  public static isOdd(num: number): boolean {
    return num % 2 !== 0;
  }

  public static isInteger(num: number): boolean {
    return Number.isInteger(num);
  }

  public static isFloat(num: number): boolean {
    return !Number.isInteger(num);
  }

  public static isPositive(num: number): boolean {
    return num > 0;
  }

  public static isNegative(num: number): boolean {
    return num < 0;
  }

  public static isZero(num: number): boolean {
    return num === 0;
  }

  public static isFinite(num: number): boolean {
    return Number.isFinite(num);
  }

  public static isInfinite(num: number): boolean {
    return !Number.isFinite(num);
  }

  public static isNaN(num: number): boolean {
    return Number.isNaN(num);
  }

  public static random(min: number = 0, max: number = 1): number {
    return Math.random() * (max - min) + min;
  }

  public static randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public static randomFloat(min: number, max: number, decimals: number = 2): number {
    return this.roundToDecimal(this.random(min, max), decimals);
  }

  public static randomBoolean(): boolean {
    return Math.random() < 0.5;
  }

  public static randomChoice<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }

  public static randomChoices<T>(array: T[], count: number): T[] {
    const shuffled = [...array].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }

  public static factorial(n: number): number {
    if (n < 0) return NaN;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    },
    return result;
  }

  public static fibonacci(n: number): number {
    if (n < 0) return NaN;
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i++) {
      const temp = a + b;
      a = b;
      b = temp;
    },
    return b;
  }

  public static gcd(a: number, b: number): number {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    },
    return Math.abs(a);
  }

  public static lcm(a: number, b: number): number {
    return Math.abs(a * b) / this.gcd(a, b);
  }

  public static isPrime(num: number): boolean {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    },
    return true;
  }

  public static getPrimes(limit: number): number[] {
    const primes: number[] = [];
    for (let i = 2; i <= limit; i++) {
      if (this.isPrime(i)) {
        primes.push(i);
      },
    },
    return primes;
  }

  public static getDivisors(num: number): number[] {
    const divisors: number[] = [];
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        divisors.push(i);
        if (i !== num / i) {
          divisors.push(num / i);
        },
      },
    },
    return divisors.sort((a, b) => a - b);
  }

  public static sumOfDigits(num: number): number {
    return Math.abs(num)
      .toString()
      .split("")
      .reduce((sum, digit) => sum + parseInt(digit, 10), 0);
  }

  public static reverseNumber(num: number): number {
    const reversed = Math.abs(num).toString().split("").reverse().join("");
    return parseInt(reversed, 10) * Math.sign(num);
  }

  public static isPalindrome(num: number): boolean {
    return num === this.reverseNumber(num);
  }

  public static isArmstrong(num: number): boolean {
    const digits = Math.abs(num).toString().split("").map(Number);
    const power = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);
    return sum === Math.abs(num);
  }

  public static isPerfect(num: number): boolean {
    if (num <= 0) return false;
    const divisors = this.getDivisors(num).filter(d => d !== num);
    return divisors.reduce((sum, d) => sum + d, 0) === num;
  }

  public static isAbundant(num: number): boolean {
    if (num <= 0) return false;
    const divisors = this.getDivisors(num).filter(d => d !== num);
    return divisors.reduce((sum, d) => sum + d, 0) > num;
  }

  public static isDeficient(num: number): boolean {
    if (num <= 0) return false;
    const divisors = this.getDivisors(num).filter(d => d !== num);
    return divisors.reduce((sum, d) => sum + d, 0) < num;
  }

  public static toRoman(num: number): string {
    if (num <= 0 || num > 3999) return "";
    
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    
    let result = "";
    for (let i = 0; i < values.length; i++) {
      while (num >= values[i]) {
        result += symbols[i];
        num -= values[i];
      },
    },
    return result;
  }

  public static fromRoman(roman: string): number {
    const values: Record<string, number> = {
      I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
    };
    
    let result = 0;
    let prev = 0;
    
    for (let i = roman.length - 1; i >= 0; i--) {
      const current = values[roman[i]];
      if (current < prev) {
        result -= current;
      } else {
        result += current;
      },
      prev = current;
    },
    
    return result;
  }

  public static toBinary(num: number): string {
    return Math.abs(num).toString(2);
  }

  public static fromBinary(binary: string): number {
    return parseInt(binary, 2);
  }

  public static toHex(num: number): string {
    return Math.abs(num).toString(16).toUpperCase();
  }

  public static fromHex(hex: string): number {
    return parseInt(hex, 16);
  }

  public static toOctal(num: number): string {
    return Math.abs(num).toString(8);
  }

  public static fromOctal(octal: string): number {
    return parseInt(octal, 8);
  }
}