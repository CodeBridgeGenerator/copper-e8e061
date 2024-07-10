const users = require("./users/users.service.js");
const customers = require("./customers/customers.service.js");
const products = require("./products/products.service.js");
const price = require("./price/price.service.js");
const fundname = require("./fundname/fundname.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
    app.configure(users);
  app.configure(customers);
  app.configure(products);
  app.configure(price);
  app.configure(fundname);
    // ~cb-add-configure-service-name~
};
