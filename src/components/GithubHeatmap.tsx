import { Heatmap } from 'contribution-heatmap';

interface CommitActivity {
  total: number;
  week: number;
  days: number[];
}

const getCommitActivity = async (repo: string): Promise<CommitActivity[]> => {
  const headers = {
    Authorization: 'token b234e848516bb02eb9bd3e266d7d46f460820f05',
  };
  const url = `https://api.github.com/repos/${repo}/stats/commit_activity`;
  const response = await fetch(url, { headers });
  const data = await response.json();
  return data;
};

export default async function GithubHeatmap({ repo }: { repo: string }) {
  const commitActivity = await getCommitActivity(repo);

  return (
    <Heatmap
      colour={['#ebedf0', '#c6e48b', '#40c463', '#30a14e', '#216e39']}
      squareNumber={365}
      count={commitActivity.flatMap((activity) => activity.days)}
      squareGap={'4px'}
      squareSize={'15px'}
    />
  );
}
