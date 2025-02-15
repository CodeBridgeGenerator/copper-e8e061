const { Fundname } = require('./fundname.class');
const createModel = require('../../models/fundname.model');
const hooks = require('./fundname.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/fundname', new Fundname(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('fundname');

  service.hooks(hooks);
};