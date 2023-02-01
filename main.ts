import { Octokit } from 'npm:@octokit/rest@x.x.x';

export function add(a: number, b: number): number {
  return a + b;
}

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const octokit = new Octokit({ auth: Deno.env.get('GITHUB_TOKEN' )});
  const { data } = await octokit.repos.get({ owner: 'SRVngOrg', repo: 'test-cicd' });

  console.log("Add 2 + 3 =", add(2, 3));
  console.log(data.clone_url);
}
