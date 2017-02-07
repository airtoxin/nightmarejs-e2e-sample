import nightmare from 'nightmare';
import assert from 'assert';
import { goto, clickIncrement, clickDecrement, clickIncrementAsync, getCount } from '../helpers';

describe('nightmarejs-e2e-sample', () => {
  let page;
  beforeEach(() => {
    page = nightmare({ show: true });
  });
  afterEach(done => {
    page.halt(null, done);
  });

  it('should show page', () => page
    .use(goto('/'))
    .title()
    .then(title => assert.strictEqual(title, 'nightmarejs-e2e-sample'))
  );

  it('should increment', () => page
    .use(goto('/'))
    .use(clickIncrement())
    .use(clickIncrement())
    .use(clickIncrement())
    .use(clickIncrement())
    .use(clickIncrement())
    .use(getCount())
    .then(count => assert.strictEqual(count, 5))
  );

  it('should decrement', () => page
    .use(goto('/'))
    .use(clickDecrement())
    .use(clickDecrement())
    .use(clickDecrement())
    .use(getCount())
    .then(count => assert.strictEqual(count, -3))
  );

  it('should increment asynchronously', () => page
      .use(goto('/'))
      .use(clickIncrementAsync())
      .use(getCount())
      .then(count => assert.strictEqual(count, 0))
      .then(() => page
        .wait(3000)
        .use(getCount())
        .then(count => assert.strictEqual(count, 1))
      )
  );
});
