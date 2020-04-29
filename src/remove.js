const core = require('@actions/core');
const github = require('@actions/github');
const Main = require('apr-main');

const removeEnvironment = require('./remove-environment');

Main(async () => {
  const environment = core.getInput('environment', { required: true });

  const { context } = github;
  const { repo: repository } = context;
  const { repo, owner } = repository;

  await removeEnvironment({ repo, owner, environment });
});
