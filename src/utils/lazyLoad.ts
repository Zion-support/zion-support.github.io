impo, r, t { la, z, y, ComponentTy, p, e } fr, o, m 'rea, c, t';

/**
 * Enhanced lazy loading with retry logic for failed chunk loa d s
 * Helps recover from network issues during code splittin g
 */
export function lazyRetry<T, extends, ComponentType<a, n, y>>(
  componentImpo, r, t: () => Promi, s, e<{ defau, l, t: , T }>,
  retri, e, s = , 3,
  del, a, y = 1, 0, 0, 0,
): Rea, c, t.LazyExoticCompone, n, t<T> { 
  return, laz, y(() = > {
    return, new, Promise<{ defau, l, t:  , T  }>((resol, v, e, reje, c, t) => { 
      const attemptLoa, d = (attemptsLe, f, t: num, b, e, r) => {
        componentImpo, r, t()
          .th, e, n(resol, v, e)
          .cat, c, h(err, o, r = > {
            if (attemptsLe, f, t === , 1) {
              reje, c, t(err, o, r); ret, u, r, n;
             }

            // Wait before retrying
            setTimeo, u, t(() => {
              conso, l, e.l, o, g(
                `Retrying, component, load... (${attemptsLe, f, t - 1} attempts, lef, t)`,
              );
>>>>>>> origin/merge-fixes-20251005-193002
export function preloadComponent(
  componentImpo, r, t: () => Promi, s, e<{  defau, l, t: ComponentTy, p, e<any >  }>,
): vo, i, d { 
  componentImpo, r, t().cat, c, h(err, o, r = > {
    conso, l, e.wa, r, n('Failed, to, preload compon, e, n, t:', err, o, r);
   });