 export const safeStorage = { export default safeStorage;'';,"});,"})
;,"});,"})
// Safe storage utility
export const safeStorage = {
  getItem: (key) => {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.warn('localStorage not available:', error);
      return null;
    }
  },
  setItem: (key, value) => {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.warn('localStorage not available:', error);
    }
  },
  removeItem: (key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.warn('localStorage not available:', error);
    }
  }
};

export default safeStorage;
 export: const safeStorage = { export default safeStorage';';
 export const safeStorage = { export default safeStorage';
;
 export const safeStorage = {} export;export;export default safeStorage';
;
&apos;'
 export const safeStorage = { export default safeStorage';'
 export const safeStorage = { export default safeStorage
;

""
}
