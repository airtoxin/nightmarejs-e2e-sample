import assert from 'assert';
import getNightmareInstance, {
  goto,
  clickIncrement,
  clickDecrement,
  clickIncrementAsync,
  getCount,
  clickPlusN,
} from '../helpers';

describe('nightmarejs-e2e-sample', () => {
  let page;
  beforeEach(() => {
    page = getNightmareInstance();
  });
  afterEach((done) => {
    page.halt(null, done);
  });

  it('should show page', () => page
    .use(goto('/'))
    .title()
    .then(title => assert.strictEqual(title, 'nightmarejs-e2e-sample')),
  );

  it('should increment', () => page
    .use(goto('/'))
    .use(clickIncrement())
    .use(clickIncrement())
    .use(clickIncrement())
    .use(clickIncrement())
    .use(clickIncrement())
    .use(getCount())
    .then(count => assert.strictEqual(count, 5)),
  );

  it('should decrement', () => page
    .use(goto('/'))
    .use(clickDecrement())
    .use(clickDecrement())
    .use(clickDecrement())
    .use(getCount())
    .then(count => assert.strictEqual(count, -3)),
  );

  it('should increment asynchronously', () => page
      .use(goto('/'))
      .use(clickIncrementAsync())
      .use(getCount())
      .then(count => assert.strictEqual(count, 0))
      .then(() => page
        .wait(3000)
        .use(getCount())
        .then(count => assert.strictEqual(count, 1)),
      ),
  );

  it('should increment +10, +300 and +575', () => page
    .use(goto('/'))
    .use(clickPlusN(10))
    .use(getCount())
    .then(count => assert.strictEqual(count, 10))
    .then(() => page
      .use(clickPlusN(300))
      .use(getCount())
      .then(count => assert.strictEqual(count, 10 + 300)))
    .then(() => page
      .use(clickPlusN(575))
      .use(getCount())
      .then(count => assert.strictEqual(count, 10 + 300 + 575))),
  );
});
