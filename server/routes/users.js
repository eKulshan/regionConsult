export default (app) => {
  app
    .get('/users/new', { name: 'newUser' }, (req, reply) => {
      const user = {};
      reply.render('users/new', { user });
      return reply;
    })
    .get('/users', { name: 'users' }, (req, reply) => {
      const users = {};
      reply.render('users/index', { users });
      return reply;
    });
};
