const core = require('@actions/core');
const github = require('@actions/github');

// get repo, then get `default_branch` attr
module.exports = async (opts) => {
  const token = core.getInput('token', { required: true });
  const client = new github.GitHub(token);

  const { data } = await client.repos.get(opts);
  const { default_branch } = data;
  console.log('Got default_branch: %s', { default_branch });
  return default_branch;
};
