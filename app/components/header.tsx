'use client';

import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaGlobe } from 'react-icons/fa';

const Header: React.FC = () => {
  const router = useRouter();
  const t = useTranslations();
  const locale = useLocale();

  const changeLanguage = (lang: string) => {
    router.push(`/${lang}`);
  };

  return (
    <header className="bg-background dark:bg-secondBackground shadow-md py-4 px-6 rounded-xl mx-auto max-w-[93%] flex items-center justify-between transition-all">
      <Link href="/">
        <img src="/img/Logotype.webp" alt="logo_bitcoinmaty" className="h-10 object-contain" />
      </Link>

      <nav className="hidden md:flex gap-6 text-textColor">
        <Link href="/">{t('home')}</Link>
        <Link href="/widget">{t('widget')}</Link>
        <Link href="https://www.bitaddress.org">{t('bitaddress')}</Link>
        <Link href="/atms_list">{t('atms')}</Link>
      </nav>

      {/* Language Switcher */}
      <div className="relative">
        <button className="text-yellow">
          <FaGlobe size={20} />
        </button>
        <ul className="absolute top-full mt-2 bg-secondBackground shadow-lg rounded-md py-2 w-24 text-center">
          <li className="cursor-pointer px-4 py-2 hover:bg-yellow" onClick={() => changeLanguage('sk')}>
            SK
          </li>
          <li className="cursor-pointer px-4 py-2 hover:bg-yellow" onClick={() => changeLanguage('en')}>
            EN
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
