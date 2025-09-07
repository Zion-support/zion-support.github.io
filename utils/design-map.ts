export type UIKitKind = "ios" | "android" | "web";

export interface TokenSet {
  colors: Record<string, string>;
  typography: Record<string, any>;
  spacing: Record<string, number>;
}

export interface UIKit {
  kind: UIKitKind;
  tokens: TokenSet;
  components: Record<string, any>;
}

export const designMap: UIKit[] = [
  {
    kind: "web",
    tokens: {
      colors: {
        primary: "#3B82F6",
        secondary: "#8B5CF6",
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444"
      },
      typography: {
        fontFamily: "Inter, sans-serif",
        fontSize: {
          xs: "0.75rem",
          sm: "0.875rem",
          base: "1rem",
          lg: "1.125rem",
          xl: "1.25rem"
        }
      },
      spacing: {
        xs: 4,
        sm: 8,
        md: 16,
        lg: 24,
        xl: 32
      }
    },
    components: {
      Button: {
        primary: "bg-blue-600 text-white px-4 py-2 rounded",
        secondary: "bg-gray-600 text-white px-4 py-2 rounded"
      },
      Card: {
        base: "bg-white shadow-md rounded-lg p-6"
      }
    }
  }
];