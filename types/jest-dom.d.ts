<<<<<<< HEAD
/// <reference types="jest" />
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-f44d
/// <reference types="@testing-library/jest-dom" />

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R
      toHaveClass(className: string): R
<<<<<<< HEAD
      toHaveTextContent(text: string | RegExp): R
    }
  }
}
=======
      toHaveAttribute(attr: string, value?: string): R
    }
  }
}

export {}
>>>>>>> cursor/fix-errors-and-merge-to-main-f44d
