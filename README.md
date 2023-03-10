# Numetry Back-end Developer Exercise

## The Exercise

Numetry is an EdTech company that is built to help Teachers keep kids having fun learning.
Based on that we need to build an API for a Panel that Teachers can see and understand the student's progress and also create exercises based on the games skills. To help us with this challenge we need to hire developers that must demonstrate an ability to read existing code and write new code using NodeJS, JS ES6+, Express, Typescript and SQL (PostGres) and NoSQL Db (MongoDB and Redis). For that reason, this exercise provides boilerplate code that you are expected to extend and utilize in your solution.

This is a pair programming exercise and there is no time limit. If you get stuck, ask for help! Software development is a collaborative process! We are there to help guide you as we come to a solution together.

## Set-up Instructions

- Make sure you have `node > 16` installed before starting
- Clone this project: `git clone `
- Open the project in VS Code
- Open the `project folder`.

## The Goal

Having two different tables, assingment and game table already created and with data populated.
Is necessary to make the relationship between these two tables and return an object with all the assignment and games information.
Consider that one Assignments can have many games related.

## Acceptance Criteria

1. Create the relationship between the two tables.
2. Insert, populate seed data to test the relationship.
3. Create the SQL to return the relationship data.
```
SELECT *
FROM assignment_games_game
JOIN "assignment" ON "assignment".id = "assignment_games_game"."assignmentId"
JOIN game ON game.id = "assignment_games_game"."gameId"
```
4. Create or change a find method to return the relationship data.

5. Explain:
5.1. Wow could we add authorization or route guards in some routes in the API?
5.2. How would we store sensitive data in the database?

## Installation

```bash
$ npm install
```

## Development 
```bash
$ npm run dev
```

## Run Migrations typeorm commands
`ts-node ./node_modules/typeorm/cli.js migration:run`

## Generate Migration commands
`ts-node ./node_modules/typeorm/cli.js migration:generate -n [new-table] -d ./src/migration/`

## Create Migration typeorm commands
`ts-node ./node_modules/typeorm/cli.js migration:create -n [new-table] -d ./src/migration/`

## drop database
`ts-node ./node_modules/typeorm/cli.js schema:drop`
