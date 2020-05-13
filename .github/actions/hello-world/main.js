const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  try {
    const octokit = new github.GitHub(github.token);
    const issueComment = octokit.issue({ body: 'Hello World!' })
    context.github.issues.createComment(issueComment)
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
