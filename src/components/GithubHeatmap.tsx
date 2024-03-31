import Heatmap from './Heatmap';

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
  return <Heatmap commitActivity={commitActivity} />;
}
