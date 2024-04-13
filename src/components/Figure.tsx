import clsx from 'clsx';
import React from 'react';

export default function Figure({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  return (
    <div className={clsx('relative', className)}>
      <div className="p-2 border-2 m-2 rounded mx-auto max-w-3xl ">
        <img src={src} />
      </div>
    </div>
  );
}
