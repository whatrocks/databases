CREATE DATABASE chat;

USE chat;
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) UNIQUE,
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT,
  id_users INT NOT NULL,
  text VARCHAR(255),
  created_at VARCHAR(255),
  PRIMARY KEY (id),
  FOREIGN KEY (id_users) REFERENCES users(id)
);

insert into users (name, id) values ('Way', 1);
insert into users (name) values ('Charlie');

insert into messages (text, created_at, id_users) 
  values('does this work?', '2015-10-30 04:05:05', 1);

insert into messages (text, created_at, id_users)
  values('I also hope this works', '2015-10-30 04:05:06', 2);
