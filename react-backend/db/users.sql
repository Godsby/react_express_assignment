DROP DATABASE IF EXISTS userlist;
CREATE DATABASE userlist;

\c userlist;

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  username VARCHAR,
  password_digest VARCHAR,
  phone VARCHAR
);

INSERT INTO users (username, password_digest, phone)
  VALUES ('Tyler', 'password', '718-123-3456'), 
         ('Shannon', 'password1', '718-234-4567'), 
         ('Richard', 'password2', '718-321-9089');
