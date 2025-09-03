<<<<<<< HEAD
 export const safeStorage = { export default safeStorage;'';,"});,"})
;,"});,"})
=======
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
 export: const safeStorage = { export default safeStorage';';';';
=======
<<<<<<< HEAD
 export const safeStorage = { export default safeStorage';
>>>>>>> main
;
=======
<<<<<<< HEAD
 export const safeStorage = {} export;export;export default safeStorage';
;
&apos;'
=======
<<<<<<< HEAD
 export const safeStorage = { export default safeStorage';'
=======
 export const safeStorage = { export default safeStorage
>>>>>>> main
;

""
}
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
