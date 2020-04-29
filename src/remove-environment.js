const core = require('@actions/core');
const got = require('got');
const { default: ForEach } = require('apr-for-each');
const github = require('@actions/github');
const { join } = require('path');
const { format } = require('url');

const createDeploymentStatus = require('../create-deployment-status');

// DELETE /repos/:owner/:repo/deployments/:deployment_id
// https://developer.github.com/v3/repos/deployments/#delete-a-deployment
const removeDeployment = async (opts) => {
  const token = core.getInput('token', { required: true });
  const { owner, repo, deployment_id: id } = opts;

  const href = format({
    protocol: 'https:',
    slashes: true,
    host: 'api.github.com',
    pathname: join('/repos', owner, repo, 'deployments', String(id)),
  });

  console.log('DELETE %s', href);

  return got.delete(href, {
    headers: {
      accept: 'application/vnd.github.ant-man-preview+json',
      'user-agent': 'octokit.js/16.43.1 Node.js/12.13.1 (Linux 5.0; x64)',
      Authorization: `token ${token}`,
    },
  });
};

export default async ({ repo, owner, environment }) => {
  const token = core.getInput('token', { required: true });

  const client = new github.GitHub(token);
  // get deployemnts fro this enviroment
  const { data: deployments } = await client.repos.listDeployments({
    per_page: 100,
    owner,
    repo,
    environment,
  });

  // for each deployment
  await ForEach(
    Array.prototype.concat.apply([], deployments),
    async ({ id: deployment_id }) => {
      // create an inactive status (so that we can remove the deployment)
      await createDeploymentStatus({
        owner,
        repo,
        deployment_id,
        environment,
        state: 'inactive',
      });

      // delete the deployment
      const payload = { owner, repo, deployment_id };
      console.log('removeDeployment %o', payload);
      await removeDeployment(payload);
    },
  );
};
