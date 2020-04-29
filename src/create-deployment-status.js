const core = require('@actions/core');
const got = require('got');
const { join } = require('path');
const { format } = require('url');

// POST /repos/:owner/:repo/deployments/:deployment_id/statuses
// https://developer.github.com/v3/repos/deployments/#create-a-deployment-status
module.exports = async (opts) => {
  const token = core.getInput('token', { required: true });

  const { owner, repo, deployment_id: id, ...json } = opts;

  const pathname = join(
    '/repos',
    owner,
    repo,
    'deployments',
    String(id),
    'statuses',
  );

  const href = format({
    protocol: 'https:',
    slashes: true,
    host: 'api.github.com',
    pathname,
  });

  console.log('POST %s %O', href, json);

  return got.post(href, {
    json,
    headers: {
      accept: 'application/vnd.github.ant-man-preview+json',
      'user-agent': 'octokit.js/16.43.1 Node.js/12.13.1 (Linux 5.0; x64)',
      Authorization: `token ${token}`,
    },
  });
};
