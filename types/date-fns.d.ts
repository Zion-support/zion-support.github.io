declare module "date-fns" {
declare module "date-fns" {;
<<<<<<< HEAD
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  // Minimal typing for the `format` helper we use in the codebase.  The real;
  // package provides far richer typings – this is only a safety-net so that;
  // isolated compilation doesn't fail if `@types/date-fns` isn't installed.;
  export function format(date: Date | number, formatStr: string): string;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
}
=======

}
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
