import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@radix-ui/themes/styles.css';
import './globals.css';
import Image from 'next/image';
import Link from 'next/link';
import { TabNav, Theme } from '@radix-ui/themes';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + ' dark'}>
        <Theme accentColor="iris" radius="small" scaling="95%">
          <div className="shadow-md border-b border-gray-700">
            <div className="container flex justify-between py-2">
              <Link href={'/'}>
                <Image alt="Logo" width={40} height={20} src={'/logo.svg'} />
              </Link>
              <TabNav.Root className="shadow-none">
                <TabNav.Link href="#" active>
                  Wallets
                </TabNav.Link>
                <TabNav.Link href="/standards">Standards Tracker</TabNav.Link>
                <TabNav.Link href="/modules">
                  Smart Account Modules List
                </TabNav.Link>
              </TabNav.Root>
              <div />
            </div>
          </div>
          <div className="container">{children}</div>
        </Theme>
      </body>
    </html>
  );
}
