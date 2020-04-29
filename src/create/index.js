const IsBoolean = require('lodash.isboolean');
const core = require('@actions/core');
const github = require('@actions/github');
const Main = require('apr-main');

const createDeploymentStatus = require('../create-deployment-status');
const isProduction = require('./is-production');
const removeEnvironment = require('../remove-environment');

Main(async () => {
  const token = core.getInput('token', { required: true });
  const ref = core.getInput('ref', { required: true });
  const environment = core.getInput('environment', { required: true });
  const transient = core.getInput('transient_environment');
  const envUrl = core.getInput('environment_url');
  const logUrl = core.getInput('log_url');
  const state = core.getInput('state', { require: true });

  const { context } = github;
  const { repo: repository } = context;
  const { repo, owner } = repository;

  const client = new github.GitHub(token, { previews: ['flash', 'ant-man'] });

  // is this a production deployment?
  // yes if `production_environment` or if enviroment === default_branch
  const productionEnvironment = await isProduction({ owner, repo });

  const createDeployment = async () => {
    const payload = {
      owner,
      repo,
      ref,
      required_contexts: [],
      transient_environment: IsBoolean(transient) ? transient : false,
      production_environment: productionEnvironment,
      environment,
    };

    const { data: deployment } = await client.repos.createDeployment(payload);
    console.log('createDeployment %o %o', payload);

    const { id } = deployment;
    return id;
  };

  const createStatus = async (deployment_id) => {
    return createDeploymentStatus({
      owner,
      repo,
      deployment_id,
      production_environment: productionEnvironment,
      log_url: logUrl,
      environment_url: envUrl,
      auto_inactive: true,
      environment,
      state,
    });
  };

  if (!['in_progress', 'pending', 'queued'].includes(state)) {
    await removeEnvironment({ repo, owner, environment });
  }

  // and create a new deployment from scratch
  await createStatus(await createDeployment());
});
