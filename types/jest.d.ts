import '@testing-library/jest-dom';

declare global {
  namespace jest {
    interface Matchers<R> {</R>toBeInTheDocument</R>(): R;
    }
  }
}
