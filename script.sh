#!/bin/bash

cd frontend

npm i

npm start

cd ..

cd backend

mvn install 

mvn spring-boot:run

##MY SQL

mysql -u root

GRANT ALL PRIVILEGES ON *.* TO 'todolist_user'@'localhost' IDENTIFIED BY '1234';

\q

mysql -u todolist_user -p

CREATE DATABASE tasks