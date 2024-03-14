import Image from 'next/image';
import { title } from 'process';
import React from 'react';

export default function StatCard(props: {
  image: string;
  title: string;
  stat: string;
}) {
  return (
    <div className="flex border rounded px-3 py-2 gap-3 border-gray-700 items-center">
      <Image src={props.image} width={30} height={30} alt={title} />
      <div>
        <div className="text-sm text-gray-400">{props.title}</div>
        <div className="font-medium text-gray-300">{props.stat}</div>
      </div>
    </div>
  );
}
