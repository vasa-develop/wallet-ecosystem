const getCountributorsCount = async (repo: string) => {
  let contributorsCount = 0;
  // Replace 'YOUR_TOKEN' with your GitHub Personal Access Token
  const headers = {
    Authorization: 'token b234e848516bb02eb9bd3e266d7d46f460820f05',
  };
  const url = `https://api.github.com/repos/${repo}/contributors?per_page=1`;

  const response = await fetch(url, { headers });
  const linkHeader = response.headers.get('link');
  if (linkHeader) {
    const lastPageMatch = linkHeader.match(/<([^>]+)>;\s*rel="last"/);
    if (lastPageMatch) {
      const lastPageUrl = new URL(lastPageMatch[1]);
      const lastPageNum = lastPageUrl.searchParams.get('page') || '1';
      contributorsCount = parseInt(lastPageNum);
    }
  } else {
    console.log('Total contributors: 1 or request limit exceeded');
  }
  return contributorsCount;
};

export default async function GithubContributorCount({
  repo,
}: {
  repo: string;
}) {
  const contributorsCount = await getCountributorsCount(repo);
  return <p>{contributorsCount} contributors in the last year</p>;
}
