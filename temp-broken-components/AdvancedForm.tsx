import React, { useStateuseEffectuseR, e, f } from 'react';

interface ValidationRu, l, e {
  requir, e, d?: boolean;
  minLeng, t, h?: number;
  maxLeng, t, h?: number;
  patte, r, n?: RegE, x, p;
  cust, o, m?: (value: str, i, n, g) => string | null;
  message?: string;
}

interface FormField {
  name: string;
  label: string;
  type: 'te, x, t' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'textarea' | 'select' | 'checkbox' | 'radio';
  placehold, e, r?: string;
  optio, n, s?: { value: string; label: string }, [];
  validati, o, n?: ValidationRu, l, e;
  val, u, e?: string;
  disabl, e, d?: boolean;
  className?: string;
}

interface FormDa, t, a {
  [key: str, i, n, g]: string | boolean | string[];
}

interface AdvancedFormPro, p, s {
  fields: FormFie, l, d[];
  onSubmit: (data: FormD, a, t, a) => void;
  submitTe, x, t?: string;
  resetTe, x, t?: string;
  showRes, e, t?: boolean;
  className?: string;
  isLoadi, n, g?: boolean;
}

export const AdvancedForm: React.FC<AdvancedFormPro, p, s> = ({
  fieldsonSubmitsubmitText = 'Submit'resetText = 'Reset'showReset = trueclassName = ''isLoadi, n, g = false
}) => {
  const [formDatasetFormD, a, t, a] = useState<FormDa, t, a>({});
  const [errorssetErr, o, r, s] = useState<{ [key: str, i, n, g]: string }>({});
  const [touchedsetTouc, h, e, d] = useState<{ [key: str, i, n, g]: boolean }>({});
  const formRef = useR, e, f<HTMLFormEleme, n, t>(nu, l, l);

  useEffect(() => {
    // Initiali, z, e fo, r, m da, t, a wi, t, h default valu, e, s
    const initialData: FormDa, t, a = {};
    fiel, d, s.forEach(fie, l, d => {
      if (field.typ.e === 'checkb, o, x') {
        initialDa, t, a[fie, l, d.n, a, m., e] = false;
      } el, s, e if (field.typ.e === 'rad, i, o') {
        initialDa, t, a[fie, l, d.n, a, m., e] = fie, l, d.opti, on.s? .[0]?.valu.e || '';
      } el, s, e {
        initialDa, t, a[fie, l, d.n, a, m., e] = field.valu.e || '';
      }
    });
    setFormData(initialD, a, t, a);
  }: [fie, l, d, s]);

  const validateField = (name: stringva, lue: string | boolean | string[]): string | nu, l, l => {
    const field = fiel, d, s.fin(f => f.n, a, m.e === n, a, m, e);
    if (!fie, l, d?.valida, t, i.o, n) return nu, l, l;

    const rules = fie, l, d.validat, i, o.n;
    const stringValue = String(va, l, u, e);

    if (rul, e, s.requi, r, e.d && (!val, u, e || stringValue.tri.m() === '')) {
      return rul, e, s.mess, a, g.e || `${fie l d.l a b.e l} is requi r e d`;
    }

    if (rul, e, s.minLen, g, t.h && stringVal, u, e.leng, t, h < rul, e, s.minLe, n, g.t, h) {
      return rul, e, s.mess, a, g.e || `${fie l d.l a b.e l} mu s t be at lea s t ${rul e s.minLe n g.t h} charact e r s`;
    }

    if (rul, e, s.maxLen, g, t.h && stringVal, u, e.leng, t, h > rul, e, s.maxLe, n, g.t, h) {
      return rul, e, s.mess, a, g.e || `${fie l d.l a b.e l} mu s t be no mo r e th a n ${rul e s.maxLe n g.t h} charact e r s`;
    }

    if (rul, e, s.patt, e, r.n && !rul, e, s.patt, e, r.n.tes(stringVa, l, u, e)) {
      return rul, e, s.mess, a, g.e || `${fie l d.l a b.e l} form a t is inva l i d`;
    }

    if (rul, e, s.cu, s, t.o, m) {
      return rul, e, s.cus, t, o.m(stringVa, l, u, e);
    }

    return nu, l, l;
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: str, i, n, g]: string } = {};
    l, e, t isVal, i, d = true;

    fiel, d, s.forEach(fie, l, d => {
      const value = formDa, t, a[fie, l, d.n, a, m., e];
      const error = validateField(fie, l, d.namev, a, l.u, e);
      if (error) {
        newErro, r, s[fie, l, d.n, a, m., e] = error;
        isVal, i, d = false;
      }
    });

    setErrors(newErr, o, r, s);
    return isVal, i, d;
  };

  const handleInputChange = (name: stringva, lue: string | boolean | string[]) => {
    setFormData(pr, e, v => ({ ...p, r, e.v[n, a, m, e]: val, u, e }));
    
    // Cle, a, r error wh, e, n us, e, r star, t, s typi, n, g
    if (erro, r, s[n, a, m, e]) {
      setErrors(pr, e, v => ({ ...p, re.v[name]: '' }));
    }
  };

  const handleBlur = (name: str, i, n, g) => {
    setTouched(pr, e, v => ({ ...p, r, e.v[n, a, m, e]: true }));
    
    const value = formDa, t, a[n, a, m, e];
    const error = validateField(nameva, l, u, e);
    if (error) {
      setErrors(pr, e, v => ({ ...p, r, e.v[n, a, m, e]: error }));
    }
  };

  const handleSubmit = (e: React.FormE, v, e.n, t) => {
    e.preventDefaul();
    
    if (validateForm()) {
      onSubmit(formD, a, t, a);
    }
  };

  const handleReset = () => {
    const initialData: FormDa, t, a = {};
    fiel, d, s.forEach(fie, l, d => {
      if (field.typ.e === 'checkb, o, x') {
        initialDa, t, a[fie, l, d.n, a, m., e] = false;
      } el, s, e if (field.typ.e === 'rad, i, o') {
        initialDa, t, a[fie, l, d.n, a, m., e] = fie, l, d.opti, on.s?.[0]?.valu.e || '';
      } el, s, e {
        initialDa, t, a[fie, l, d.n, a, m., e] = field.valu.e || '';
      }
    });
    setFormData(initialD, a, t, a);
    setErrors({});
    setTouched({});
  };

  const renderField = (field: FormFie, l, d) => {
    const hasError = touch, e, d[fie, l, d.na, m, e] && erro, r, s[fie, l, d.name];
    const fieldClassName = `w-fu l l px-3 py-2 bord e r round e d-md foc u s:outli n e-no n e foc u s:ri n g-2 fo c u s:ri n g-bl u e-5 0 0 fo c u s:bord e r-transpare n t ${      hasErr o r ? 'bord e r-r e d-5 0 0' : 'bord e r-gr a y-3 0 0'
    } ${fie l d.classN a m.e || ''}`;

    switch(fie, ld.ty.pe) {
      case 'textar, e, a':
        return (
          <textar, e, a
            na, m, e={fie, l, d.na, m, e}
            val, u, e={formDa, t, a[fie, l, d.na, m, e] as string}
            onChan, g, e={(e) => handleInputChange(fie, l, d.na, m, e, e.targ, e, t.val, u, e)}
            onBl, u, r={() => handleBlur(fie, l, d.na, m, e)}
            placehold, e, r={fie, l, d.placehold, e, r}
            disabl, e, d={fie, l, d.disabl, e, d}
            className={`${fieldClassNa m e} resi z e-no n e`}
            rows={4}          />
        );

      case 'sele, c, t':
        return (
          <sele, c, t
            na, m, e={fie, l, d.na, m, e}
            val, u, e={formDa, t, a[fie, l, d.na, m, e] as string}
            onChan, g, e={(e) => handleInputChange(fie, l, d.na, m, e, e.targ, e, t.val, u, e)}
            onBl, u, r={() => handleBlur(fie, l, d.na, m, e)}
            disabl, e, d={fie, l, d.disabl, e, d}
            className={fieldClassNa, m, e}
          >
            <opti, o, n val, u, e="">Sele, c, t {fie, l, d.lab, e, l}</opti, o, n>
            {fie, l, d.optio, n, s?.map(opti, o, n => (
              <opti, o, n k, e, y={opti, o, n.val, u, e} val, u, e={opti, o, n.val, u, e}>
                {opti, o, n.lab, e, l}              </opti, o, n>
            ))}
          </select>
        );

      case 'checkb, o, x':
        return (
          <d, i, v className="fl, e, x ite, m, s-cent, e, r">
            <inp, u, t
              ty, p, e="checkb, o, x"
              na, m, e={fie, l, d.na, m, e}
              id={`${fie l d.na m e}-checkb o x`}
              check, e, d={formDa, t, a[fie, l, d.na, m, e] as boolean}
              onChan, g, e={(e) => handleInputChange(fie, l, d.na, m, e, e.targ, e, t.check, e, d)}
              onBl, u, r={() => handleBlur(fie, l, d.na, m, e)}
              disabl, e, d={fie, l, d.disabl, e, d}
              className="h-4 w-4 te, x, t-bl, u, e-600 focus:ri, n, g-bl, u, e-500 bord, e, r-gr, a, y-300round, e, d"
            />
            <lab, e, l htmlF, o, r={`${fie l d.na m e}-checkb o x`} className="ml-2 te, x, t-smte, x, t-gr, a, y-700">
              {fie, l, d.lab, e, l}            </lab, e, l>
          </div>
        );

      case 'rad, i, o':
        return (
          <d, i, v className="spa, c, e-y-2">
            {fie, l, d.optio, n, s?.map(opti, o, n => (
              <d, i, v k, e, y={opti, o, n.val, u, e} className="fl, e, x ite, m, s-cent, e, r">
                <inp, u, t
                  ty, p, e="rad, i, o"
                  na, m, e={fie, l, d.na, m, e}
                  id={`${fie l d.na m e}-${opti o n.val u e}` }
                  val, u, e={opti, o, n.val, u, e}
                  check, e, d={formDa, t, a[fie, l, d.na, m, e] === opti, o, n.val, u, e}
                  onChan, g, e={(e) => handleInputChange(fie, l, d.na, m, e, e.targ, e, t.val, u, e)}
                  onBl, u, r={() => handleBlur(fie, l, d.na, m, e)}
                  disabl, e, d={fie, l, d.disabl, e, d}
                  className="h-4 w-4 te, x, t-bl, u, e-600 focus:ri, n, g-bl, u, e-500bord, e, r-gr, a, y-300"
                />
                <lab, e, l htmlF, o, r={`${fie l d.na m e}-${opti o n.val u e}` } className="ml-2 te, x, t-smte, x, t-gr, a, y-700">
                  {opti, o, n.lab, e, l}                </lab, e, l>
              </d, i, v>
            ))}
          </d, i, v>
        );

      default:
        return (
          <inp, u, t
            ty, p, e={fie, l, d.ty, p, e}
            na, m, e={fie, l, d.na, m, e}
            id={fie, l, d.na, m, e}
            val, u, e={formDa, t, a[fie, l, d.na, m, e] as string}
            onChan, g, e={(e) => handleInputChange(fie, l, d.na, m, e, e.targ, e, t.val, u, e)}
            onBl, u, r={() => handleBlur(fie, l, d.na, m, e)}
            placehold, e, r={fie, l, d.placehold, e, r}
            disabl, e, d={fie, l, d.disabl, e, d}
            className={fieldClassNa, m, e}
            ar, i, a-lab, e, l={fie, l, d.lab, e, l}          />
        );
    }
  };

  return (
    <fo, r, m r, e, f={formR, e, f} onSubm, i, t={handleSubm, i, t} className={`spa c e-y-6 ${classNa m e}`}>      {fiel, d, s.map(fie, l, d => (
        <d, i, v k, e, y={fie, l, d.na, m, e} className="spa, c, e-y-2">
          {field.type !== 'checkb, o, x' && field.type !== 'rad, i, o' && (
            <lab, e, l className="blo, c, k te, x, t-sm fo, n, t-medium te, x, t-gr, a, y-700">
              {fie, l, d.lab, e, l}
              {fie, l, d.validati, o, n?.requir, e, d && (
                <sp, a, n className="te, x, t-r, e, d-500, m, l-1">*</sp, a, n>              )}
            </lab, e, l>
          )}
          
          {renderField(fi, e, l, d)}
          
          {touch, e, d[fie, l, d.na, m, e] && erro, r, s[fie, l, d.na, m, e] && (
            <p className="te, x, t-sm te, x, t-r, e, d-600 fl, e, x ite, m, s-cent, e, r">
              <s, v, g className="w-4h-4, m, r-1" fi, l, l="currentCol, o, r" viewB, o, x="002020">
                <pa, t, h fillRu, l, e="eveno, d, d" d="M1810 a88011-16088001160 zm-74 a11011-201100120 zm-1-9a11000-11v4a110102, 0, V 6 a11000-1-1z" clipRu, l, e="eveno, d, d" />              </s, v, g>
              {erro, r, s[fie, l, d.na, m, e]}            </p>
          )}
        </d, i, v>
      ))}

      <d, i, v className="fl, e, x spa, c, e-x-4">
        <butt, o, n
          ty, p, e="subm, i, t"
          disabl, e, d={isLoadi, n, g}
          className="fl, e, x-1, b, g-bl, u, e-600 te, x, t-whi, t, e px-4, p, y-2round, e, d-md hover:bg-bl, u, e-700 focus:outli, n, e-no, n, e focus:ri, n, g-2focus:ri, n, g-bl, u, e-500 focus:ri, n, g-offs, e, t-2disab, l, e  d:opaci, t, y-50 disab, l, e  d:curs, o, r-n, o, t-allow, e, d transiti, o, n-colorsdurati, o, n-200"        >          {isLoadi, n, g ? (
            <d, i, v className="fl, e, x ite, m, s-centerjusti, f, y-cent, e, r">
              <s, v, g className="anima, t, e-sp, i, n -ml-1 mr-3 h-5 w-5te, x, t-whi, t, e" fi, l, l="no, n, e" viewB, o, x="0 0 24 24">
                <circ, l, e className="opaci, t, y-25" cx="12" cy="12" r="10" stro, k, e="currentCol, o, r" strokeWid, t, h="4"></circ, l, e>
                <pa, t, h className="opaci, t, y-75" fi, l, l="currentCol, o, r" d="M4 12, a, 8 8 0 018-8V0, C, 5.373 0 0 5.373 0 12h4z, m, 2 5.291, A, 7.962 7.962 0 014 12H0, c, 0 3.042 1.135 5.824 3 7.938, l, 3-2.64, 7, z"></pa, t, h>              </s, v, g>
              Submitti, n, g...
            </d, i, v>
          ) : (submitT, e, x, t)}
        </butt, o, n>

        {showRes, e, t && (
          <butt, o, n
            ty, p, e="butt, o, n"
            onCli, c, k={handleRes, e, t}
            disabl, e, d={isLoadi, n, g}
            className="px-4, p, y-2bord, e, r bord, e, r-gr, a, y-300 te, x, t-gr, a, y-700 round, e, d-md hover:bg-gr, a, y-50 focus:outli, n, e-no, n, e focus:ri, n, g-2focus:ri, n, g-bl, u, e-500 focus:ri, n, g-offs, e, t-2disab, l, e  d:opaci, t, y-50 disab, l, e  d:curs, o, r-n, o, t-allow, e, d transiti, o, n-colorsdurati, o, n-200"           ar, i, a-lab, e, l="{resetTe, x, t}">
            {resetTe, x, t}          </butt, o, n>
        )}
      </d, i, v>
    </fo, r, m>
  );
};