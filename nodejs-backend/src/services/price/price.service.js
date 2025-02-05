const { Price } = require('./price.class');
const createModel = require('../../models/price.model');
const hooks = require('./price.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/price', new Price(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('price');

  service.hooks(hooks);
};