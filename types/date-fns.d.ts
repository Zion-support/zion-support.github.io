declare module "date-fns" {_// Minimal typing for the `format` helper we use in the codebase.  The real
  // package provides far richer typings – this is only a safety-net so that
  // isolated compilation doesn't fail if `@types/date-fns` isn't installed.
<<<<<<< HEAD
  export function format(date: Date | number, formatStr: string): string
}
=======
  export function format(_date: Date | number, _formatStr: string): string;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
