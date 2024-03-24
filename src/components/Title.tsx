import React, { PropsWithChildren } from 'react';

type TitleLevel = 1 | 2 | 3 | 4 | 5 | 6;

type TitleProps = PropsWithChildren & {
  level?: TitleLevel;
};

const titleStyle: { [key in `heading-${TitleLevel}`]: string } = {
  'heading-1': 'text-3xl  font-bold',
  'heading-2': 'text-2xl font-bold',
  'heading-3': 'text-xl font-bold',
  'heading-4': 'text-lg font-bold',
  'heading-5': 'text-base font-bold',
  'heading-6': 'text-sm font-bold',
};
export default function Title({ level = 1, children }: TitleProps) {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <HeadingTag className={titleStyle[`heading-${level}`]}>
      {children}
    </HeadingTag>
  );
}
