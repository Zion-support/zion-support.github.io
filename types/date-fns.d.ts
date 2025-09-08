<<<<<<< HEAD


declare module 'date-fns' {export function format("date": Date | number, "formatStr": string): string;'

}

=======
declare module "date-fns" {;

declare module "date-fns" {;

declare module "date-fns" {
declare module "date-fns" {;

  // Minimal typing for the `format` helper we use in the codebase.  The real;
  // package provides far richer typings – this is only a safety-net so that;
  // isolated compilation doesn't fail if `@types/date-fns` isn't installed.;
  export function format(date: Date | number, formatStr: string): string;

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}

  export function format(date: Date | number, formatStr: string): string;
  export function parseISO(dateString: string): Date;
  export function isValid(date: any): boolean;
  export function addDays(date: Date | number, amount: number): Date;
  export function subDays(date: Date | number, amount: number): Date;
  export function differenceInDays(dateLeft: Date | number, dateRight: Date | number): number;

  // Minimal typing for the `format` helper we use in the codebase.  The real;
  // package provides far richer typings – this is only a safety-net so that;
  // isolated compilation doesn't fail if `@types/date-fns` isn't installed.;
  export function format(date: Date | number, formatStr: string): string;

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba
export function parseISO("dateString": string): Date;

export function isValid("date": any): boolean;

export function addDays("date": Date | number, "amount": number): Date;

export function subDays("date": Date | number, "amount": number): Date;

export function differenceInDays("dateLeft": Date | number, "dateRight": Date | number): number;
}// Minimal typing for the `format` helper we use in the codebase.  The real;`  // package provides far richer typings – this is only a safety-net so that;
  // isolated compilation doesn't fail if `@types/date-fns` isn't installed.;'

export function format("date": Date | number, "formatStr": string): string;
  } catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" },"
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
