import { SECTIONS, SECTION_ICON } from '@/types/enum';
import Link from 'next/link';
import React from 'react';

export default function WalletSideNav({
  sections,
}: {
  sections: Array<SECTIONS>;
}) {
  return (
    <div className="w-64 flex-shrink-0 p-2 sticky">
      <div className="sticky text-sm font-medium top-4">
        {sections.map((section, index) => {
          const Icon = SECTION_ICON[section];
          return (
            <Link href={`#${section}`} key={index} scroll={true}>
              <div className="text-white flex gap-2 items-center relative hover:after:h-full after:content-[''] after:absolute after:h-0 hover:after:top-0 after:w-1 after:left-0 after:bg-white after:transition-all after:duration-200 after:ease-in-out after:top-[50%] group py-2 px-3 rounded-md mb-3 opacity-60 hover:opacity-100 transition-opacity cursor-pointer ">
                <Icon width={24} /> {section}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
