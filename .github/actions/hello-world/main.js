const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  try {
    const token = core.getInput("repo-token");
    const octokit = new github.GitHub(token);
    //const issueComment = octokit.issue({ body: 'Hello World!' })
    const newIssueComment = await octokit.issues.createComment({ owner: github.context.repo.owner, repo: github.context.repo.repo, issue_number: github.context.issue.number, body: 'Hello World!' })
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
