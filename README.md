
# Nemo Messaging App

## Introduction
Nemo Messaging App is a Node.js, React, MySQL, and ChatEngine based messaging application. It allows users to communicate with each other in real-time. This README file provides instructions on how to set up and use the application on your local machine.

!Assuming that you already setup your MYSQL database have acces to Private_key and Project_id from ChatEngine api. if not then you can sign up here =>http://chatengine.io!

## 1) Installation

1. Clone the repository to your local machine:
2. Navigate to the project folder: 

4. navigate to backend (cd backend):
5. install neccesary backend dependencies (npm install --legacy-peer-deps):
7. run the server (npm start):
8. navigate to frontend (cd .. => cd frontend):
9. install dependencies (npm install --legacy-peer-deps):
10. run the react application (npm run dev)

## 2) .env files
This application uses .env files for security reasons. here is instructions on how you can setup your .env file

1.locate to backend directory and install .env (npm install .env)

2.open file called .env.example and fill out the fields with your values (required!)

3.finally when you are done rename current file to .env and it will work perfectly



4.locate to frontend directory

5.open file called .env.example and fill out the fields with your values (required!)

6.finally when you are done rename current file to .env and it will work perfectly


## 3) Mysql table setup

third and final step is to setup three database table's (copy and paste the code inside of your query execution file)

#### !!Do not try to change anything in these queries until you are familiar with them, otherwise it can cause unexpected errors!!

1) CREATE TABLE `feedback` (
  `id` int NOT NULL AUTO_INCREMENT,
  `message` longtext NOT NULL,
  `username` varchar(100) NOT NULL,
  `date` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

2) CREATE TABLE `googleauth` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `status` varchar(100) DEFAULT 'google',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

3) CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(300) NOT NULL,
  `passcode` longtext NOT NULL,
  `room` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=102 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


## ⚠️Warnign⚠️

Note that this website was deployed on 2023-11-6. If any error occur with dependency updates feel free to email me on: jamaspishvilinika@icloud.com
