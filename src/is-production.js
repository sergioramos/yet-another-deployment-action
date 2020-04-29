const core = require('@actions/core');
const IsBoolean = require('lodash.isboolean');

const getDefaultBranch = require('./get-default-branch');

// if `production_environment` is defined, use it,
// otherwise get `default_branch` and check if
// `environment` === `default_branch`
module.exports = async (opts) => {
  const productionEnv = core.getInput('production_environment');
  const environment = core.getInput('environment', { required: true });
  const defaultBranch = await getDefaultBranch(opts);

  return IsBoolean(productionEnv)
    ? productionEnv
    : defaultBranch === environment;
};
