import { Card } from '@radix-ui/themes';
import Image from 'next/image';
import { title } from 'process';
import React from 'react';

export default function StatCard(props: {
  image: string;
  title: string;
  stat: string;
}) {
  return (
    <Card>
      <Image src={props.image} width={30} height={30} alt={title} />
      <div>
        <div className="text-sm text-gray-400">{props.title}</div>
        <div className="font-medium text-gray-300">{props.stat}</div>
      </div>
    </Card>
  );
}
