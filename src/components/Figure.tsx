import React from 'react';

export default function Figure({ src }: { src: string }) {
  return (
    <div className="relative">
      <div className="p-2 border-2 m-2 rounded mx-auto max-w-3xl ">
        <img src={src} />
      </div>
    </div>
  );
}
