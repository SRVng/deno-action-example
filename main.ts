import { Octokit } from "npm:@octokit/rest@x.x.x";

if (import.meta.main) {
  const octokit = new Octokit({ auth: Deno.env.get("GITHUB_TOKEN") });
  const { data } = await octokit.repos.get({ owner: "denoland", repo: "deno" });

  console.log(data.clone_url);
}
