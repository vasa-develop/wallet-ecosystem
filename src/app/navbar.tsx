'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { TabNav } from '@radix-ui/themes';

type TabProps = {
  text: string;
  href: string;
  isActive: boolean;
};

const Tab = ({ text, href, isActive }: TabProps) => {
  return (
    <TabNav.Link href={href} active={isActive}>
      {text}
    </TabNav.Link>
  );
};

const routes = [
  { text: 'Wallets', href: '/' },
  { text: 'Standards Tracker', href: '/standards' },
  { text: 'Smart Account Modules List', href: '/modules' },
];

export function Navbar() {
  const pathname = usePathname();
  return (
    <div className="shadow-md border-b border-gray-700">
      <div className="container flex justify-between py-2">
        <Link href={'/'}>
          <Image alt="Logo" width={40} height={20} src={'/logo.svg'} />
        </Link>
        <TabNav.Root className="shadow-none">
          {routes.map((route, i) => {
            const { text, href } = route;
            const isActive = href === pathname;
            return <Tab key={i} text={text} href={href} isActive={isActive} />;
          })}
        </TabNav.Root>
        <div />
      </div>
    </div>
  );
}
