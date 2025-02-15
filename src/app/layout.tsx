// import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AppWalletProvider from '@/provider/AppWalletProvider';
import { StateContextProvider } from '@/provider/StateProvider';
import Script from 'next/script';
import Head from 'next/head';

// export const metadata: Metadata = {
//   title: 'CoinForge',
//   description: 'Generated by CoinForge',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Head>
        <title>CoinForge</title>
        <meta name='description' content='Create and manage your tokens effortlessly with CoinForge.' />
        <meta name="author" content="CoinForge" />
        <meta name='keywords' content='Solana, Token, Creation, Token 2022' />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href='https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Script async src='https://www.googletagmanager.com/gtag/js?id=G-15H4XSTRE5'></Script>
      <script
        id='google-analytics'
        dangerouslySetInnerHTML={{
          __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-15H4XSTRE5');
    `,
        }}
      />
      <body
        className={`antialiased w-full bg-gradient-to-br from-gray-900 via-[#0c1527] to-main min-h-screen flex flex-col`}
      >
        <StateContextProvider>
          <AppWalletProvider>
            <Header />
            <main className='flex-1'>{children}</main>
            <Footer />
          </AppWalletProvider>
        </StateContextProvider>
      </body>
    </html>
  );
}
