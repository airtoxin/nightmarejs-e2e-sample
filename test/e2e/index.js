import nightmare from 'nightmare';
import assert from 'assert';

const URL = 'http://localhost:9999';

describe('nightmarejs-e2e-sample', () => {
  let page;
  beforeEach(() => {
    page = nightmare({ show: true });
  });

  it('should show page', () => {
    const result = page
      .goto(URL)
      .title()
      .end()
      .then(title => assert.strictEqual(title, 'nightmarejs-e2e-sample'));
    return result;
  });
});
