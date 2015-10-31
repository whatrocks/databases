-- DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;
/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE rooms (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT,
  id_users INT NOT NULL,
  text VARCHAR(255),
  id_rooms INT NOT NULL,
  created_at DATETIME,
  PRIMARY KEY (id),
  FOREIGN KEY (id_users) REFERENCES users(id),
  FOREIGN KEY (id_rooms) REFERENCES rooms(id)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

insert into users (name, id) values ('Way', 1);
insert into users (name) values ('Charlie');
insert into rooms (name, id) values ('Hell', 1);
insert into messages (text, created_at, id_users, id_rooms) 
  values('does this work?', '2015-10-30 04:05:05', 1, 1);

insert into messages (text, created_at, id_users, id_rooms)
  values('I also hope this works', '2015-10-30 04:05:06', 2, 1);