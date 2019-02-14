const passport = require('passport');
const db = require('../db/index');

module.exports = () => {

  passport.serializeUser((user, done) => {
    done(null, user.username);
  });

  passport.deserializeUser((username, done) => {
    db.one('SELECT username, password_digest FROM users WHERE username=$1', [username])
      .then((user) => { done(null, user); })
      .catch((err) => { done(err,null); });
  });

};
