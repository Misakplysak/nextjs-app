import { NextIntlProvider } from 'next-intl';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'sk' }];
}

export default async function RootLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`../locales/${locale}/common.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlProvider messages={messages} locale={locale} defaultLocale="en">
          {children}
        </NextIntlProvider>
      </body>
    </html>
  );
}
