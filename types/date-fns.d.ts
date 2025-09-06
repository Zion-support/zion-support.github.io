

<<<<<<< HEAD
=======
declare module "date-fns" {;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  // Minimal typing for the `format` helper we use in the codebase.  The real;
  // package provides far richer typings – this is only a safety-net so that;
  // isolated compilation doesn't fail if `@types/date-fns` isn't installed.;
  export function format(date: Date | number, formatStr: string): string;

<<<<<<< HEAD
}
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
