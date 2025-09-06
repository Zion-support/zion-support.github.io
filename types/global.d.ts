/// <reference types="next" />;
/// <reference types="next/image-types/global" />;
/// <reference types="next/navigation-types/navigation" />;
declare module '*.svg' {;
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>,;
  export default content;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
declare module '*.png' {;
  const content: string;
  export default content;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
declare module '*.jpg' {;
  const content: string;
  export default content;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
declare module '*.jpeg' {;
  const content: string;
  export default content;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
declare module '*.gif' {;
  const content: string;
  export default content;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
declare module '*.webp' {;
  const content: string;
  export default content;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
declare module '*.ico' {;
  const content: string;
  export default content;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
declare module '*.bmp' {;
  const content: string;
  export default content;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
declare module '*.json' {;
  const content: Record<string, unknown>,;
  export default content;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
declare module '*.md' {;
  const content: string;
  export default content;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
declare module '*.txt' {;
  const content: string;
  export default content;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
// Global type augmentations;
declare global {;
  interface Window {;
    __NEXT_DATA__: Record<string, unknown>,;
    __NEXT_PRELOADREADY__: (() => void) | undefined,;
    __NEXT_REGISTER_PAGE__: (() => void) | undefined,;
    __NEXT_WEBPACK_CHUNKS__: string[];
    __NEXT_WEBPACK_RUNTIME__: Record<string, unknown>;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  namespace NodeJS {;
    interface ProcessEnv {;
      NODE_ENV: 'development' | 'production' | 'test',;
      [key: string]: string | undefined;
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export {};