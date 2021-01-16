import getApp from '../server/index.js';

describe('requests', () => {
  let app;

  beforeAll(async () => {
    app = await getApp();
  });

  it('users/index', async () => {
    const res = await app.inject({
      method: 'GET',
      url: app.reverse('users'),
    });
    expect(res.statusCode).toBe(200);
  });

  it('users/new', async () => {
    const res = await app.inject({
      method: 'GET',
      url: app.reverse('newUser'),
    });
    expect(res.statusCode).toBe(200);
  });

  afterAll(() => {
    app.close();
  });
});
