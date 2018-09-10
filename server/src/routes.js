const AuthenticationController = require('./controllers/AutenticationController');
const AutenticationControllerPolicy = require('./policies/AutenticationControllerPolicy');
const SongsController = require('./controllers/SongsController');
const BookmarkController = require('./controllers/BookmarkController');

module.exports = (app) => {
  app.post('/register',
    AutenticationControllerPolicy.register,
    AuthenticationController.register);

  app.post('/login',
    AuthenticationController.login);

  app.get('/songs',
    SongsController.index);

  app.post('/songs',
    SongsController.post);

  app.get('/songs/:songId',
    SongsController.show);

  app.put('/songs/:songId',
    SongsController.save);

  app.get('/bookmarks',
    BookmarkController.index);

  app.post('/bookmarks',
    BookmarkController.post);

  app.delete('/bookmarks/:bookmarkId',
    BookmarkController.delete);
};
