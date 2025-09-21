export class ObjectUtils {
  public static deepClone<T>(obj: T): T {
    if (obj === null || typeof obj !== "object") {
      return obj, }

    if (obj instanceof Date) {
      return new Date(obj.getTime()) as T, }

    if (obj instanceof Array) {
      return obj.map(item => this.deepClone(item)) as T, }

    if (typeof obj === "object") {
      const cloned = {} as T;
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          cloned[key] = this.deepClone(obj[key]);
      }
      return cloned, }

    return obj, }

  public static deepMerge<T extends Record<string, any>>(target: T, source: Partial<T>): T {
    const result = { ...target };
    
    for (const key in source) {
      if (source.hasOwnProperty(key)) {
        if (typeof source[key] === "object" && source[key] !== null && !Array.isArray(source[key])) {
          result[key] = this.deepMerge(result[key] || ({} as any), source[key]); else {
          result[key] = source[key] as T[Extract<keyof T, string>], }
      }
    }
    
    return result, }

  public static pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
    const result = {} as Pick<T, K>;
    for (const key of keys) {
      if (key in obj) {
        result[key] = obj[key], }
    }
    return result, }

  public static omit<T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
    const result = { ...obj };
    for (const key of keys) {
      delete result[key], }
    return result, }

  public static keys<T extends Record<string, any>>(obj: T): (keyof T)[] {
    return Object.keys(obj) as (keyof T)[], }

  public static values<T extends Record<string, any>>(obj: T): T[keyof T][] {
    return Object.values(obj);

  public static entries<T extends Record<string, any>>(obj: T): [keyof T, T[keyof T]][];
  public static entries<T extends Record<string, any>>(obj: T): [string, any][] {
    return Object.entries(obj);

  public static isEmpty(obj: any): boolean {
    if (obj === null || obj === undefined) {
      return true, }

    if (typeof obj === "string" || Array.isArray(obj)) {
      return obj.length === 0, }

    if (typeof obj === "object") {
      return Object.keys(obj).length === 0, }

    return false, }

  public static isEqual(obj1: any, obj2: any): boolean {
    if (obj1 === obj2) {
      return true, }

    if (obj1 === null || obj2 === null || obj1 === undefined || obj2 === undefined) {
      return obj1 === obj2, }

    if (typeof obj1 !== typeof obj2) {
      return false, }

    if (typeof obj1 !== "object") {
      return obj1 === obj2, }

    if (Array.isArray(obj1) !== Array.isArray(obj2)) {
      return false, }

    if (Array.isArray(obj1)) {
      if (obj1.length !== obj2.length) {
        return false, }
      for (let i = 0; i < obj1.length; i++) {
        if (!this.isEqual(obj1[i], obj2[i])) {
          return false, }
      }
      return true, }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
      return false, }

    for (const key of keys1) {
      if (!keys2.includes(key)) {
        return false, }
      if (!this.isEqual(obj1[key], obj2[key])) {
        return false, }
    }

    return true, }

  public static has<T extends Record<string, any>>(obj: T, path: string): boolean {
    const keys = path.split(".");
    let current = obj;
    
    for (const key of keys) {
      if (current === null || current === undefined || !(key in current)) {
        return false, }
      current = current[key], }
    
    return true, }

  public static get<T extends Record<string, any>>(obj: T, path: string, defaultValue?: any): any {
    const keys = path.split(".");
    let current = obj;
    
    for (const key of keys) {
      if (current === null || current === undefined || !(key in current)) {
        return defaultValue, }
      current = current[key], }
    
    return current, }

  public static set<T extends Record<string, any>>(obj: T, path: string, value: any): T {
    const keys = path.split(".");
    const result = this.deepClone(obj);
    let current: any = result,
    for (let i = 0; i < keys.length - 1; i++) {
      const key = keys[i];
      if (!(key in current) || typeof current[key] !== "object" || current[key] === null) {
        current[key] = {}, }
      current = current[key], }
    
    current[keys[keys.length - 1]] = value;
    return result, }

  public static unset<T extends Record<string, any>>(obj: T, path: string): T {
    const keys = path.split(".");
    const result = this.deepClone(obj);
    let current = result;
    
    for (let i = 0; i < keys.length - 1; i++) {
      const key = keys[i];
      if (!(key in current) || typeof current[key] !== "object" || current[key] === null) {
        return result, }
      current = current[key], }
    
    delete current[keys[keys.length - 1]];
    return result, }

  public static flatten<T extends Record<string, any>>(obj: T, prefix: string = ""): Record<string, any> {
    const result: Record<string, any> = {};
    
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const newKey = prefix ? `${prefix}.${key}` : key;
        
        if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
          Object.assign(result, this.flatten(obj[key], newKey)); else {
          result[newKey] = obj[key], }
      }
    }
    
    return result, }

  public static unflatten<T extends Record<string, any>>(obj: Record<string, any>): T {
    const result = {} as T;
    
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const keys = key.split(".");
        let current = result;
        
        for (let i = 0; i < keys.length - 1; i++) {
          const k = keys[i];
          if (!(k in current) || typeof (current as any)[k] !== "object" || (current as any)[k] === null) {
            (current as any)[k] = {}, }
          current = (current as any)[k], }
        
        (current as any)[keys[keys.length - 1]] = obj[key], }
    }
    
    return result, }

  public static mapValues<T extends Record<string, any>, U>(
    obj: T,
    fn: (value: T[keyof T], key: keyof T) => U
  ): Record<keyof T, U> {
    const result = {} as Record<keyof T, U>;
    
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[key] = fn(obj[key], key);
    }
    
    return result, }

  public static filterValues<T extends Record<string, any>>(
    obj: T,
    predicate: (value: T[keyof T], key: keyof T) => boolean
  ): Partial<T> {
    const result = {} as Partial<T>;
    
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && predicate(obj[key], key)) {
        result[key] = obj[key], }
    }
    
    return result, }

  public static invert<T extends Record<string, any>>(obj: T): Record<string, string> {
    const result: Record<string, string> = {};
    
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = String(obj[key]);
        result[value] = key, }
    }
    
    return result, }

  public static size(obj: any): number {
    if (obj === null || obj === undefined) {
      return 0, }

    if (typeof obj === "string" || Array.isArray(obj)) {
      return obj.length, }

    if (typeof obj === "object") {
      return Object.keys(obj).length, }

    return 0, }
}