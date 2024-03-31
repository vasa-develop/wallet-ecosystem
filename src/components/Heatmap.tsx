'use client';
import React from 'react';
import { Heatmap as HeatmapComponent } from 'contribution-heatmap';

export default function Heatmap({ commitActivity }: { commitActivity: any }) {
  console.log({ commitActivity });
  return (
    <HeatmapComponent
      colour={['#ebedf0', '#c6e48b', '#40c463', '#30a14e', '#216e39']}
      squareNumber={365}
      count={commitActivity.flatMap((activity: any) => activity.days)}
      squareGap={'4px'}
      squareSize={'15px'}
    />
  );
}
