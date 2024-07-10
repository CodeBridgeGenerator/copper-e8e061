const assert = require('assert');
const app = require('../../src/app');

describe('\'fundname\' service', () => {
  it('registered the service', () => {
    const service = app.service('fundname');

    assert.ok(service, 'Registered the service (fundname)');
  });
});
