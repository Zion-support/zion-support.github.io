const { t } = useTranslation();
  return (
    <>;
      <Header />;
      <div className='min-h-screen bg-zion-blue flex flex-col items-center justify-center px-4 py-12'>;
        <div className='bg-zion-blue-dark rounded-xl p-8 max-w-md w-full text-center shadow-lg border border-zion-blue-light'>;
          <div className='flex justify-center mb-6'>;
            <div className='bg-zion-purple/20 p-4 rounded-full'>;
              <ShieldAlert className='h-12 w-12 text-zion-purple' />;
            </div>;
          </div>;
          <h1 className='text-3xl font-bold text-white mb-3'>;
            {t('errors && errors.access_denied')}
          </h1>;
          <p className='text-zion-slate-light mb-6'>;
            {t('errors && errors.no_permission')}
          </p>;
          <div className='flex flex-col gap-3'>;

              className="w-full border border-zion-blue-light text-zion-slate-light hover:bg-zion-blue hover:text-white px-4 py-2 rounded inline-flex items-center justify-center">;
              {t('errors && errors.login_different_account')}

      </div>;
    </>;
  );
};


import Link from 'next / link';
import { Button } from '@/components / ui / button';
import { Header } from '@/components / Header';
            </Link>;
          </div>;
        </div>;
      </div>;


;
