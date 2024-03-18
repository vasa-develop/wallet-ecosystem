'use client';

import { Heatmap } from 'contribution-heatmap';

export default function GithubHeatmap() {
  return (
    <div className="-m-5">
      <Heatmap
        colour={['#ebedf0', '#c6e48b', '#40c463', '#30a14e', '#216e39']}
        count={[10]}
      />
    </div>
  );
}
