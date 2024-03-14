'use client';

import { Heatmap } from 'contribution-heatmap';

export default function GithubHeatmap({
  colour = ['#ebedf0', '#c6e48b', '#40c463', '#30a14e', '#216e39'],
  squareNumber,
  count,
  squareGap,
  squareSize,
}: {
  colour: string[];
  squareNumber: number;
  count: number[];
  squareGap: string;
  squareSize: string;
}) {
  return (
    <div className="-m-5">
      <Heatmap
        colour={colour}
        squareNumber={squareNumber}
        count={count}
        squareGap={squareGap}
        squareSize={squareSize}
      />
    </div>
  );
}
