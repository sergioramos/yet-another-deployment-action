const core = require('@actions/core');
const Main = require('apr-main');

const actions = {
  create: require('./index/create'),
  remove: require('./index/remove'),
};

Main(async () => {
  // get action, can be "create" or "remove"
  const action = core.getInput('action', { required: true });
  if (!actions[action]) throw new Error(`Action "${action}" not valid`);
  return actions[action]();
});
