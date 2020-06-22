## Create package.json
`npm init -y`

## Installing express
`npm i express`

## Configure Server -> App -> Route -> Controller 

## install nodemon
`npm install --save-dev nodemon`

### add on package.json
`"start": "nodemon --watch app --watch src ./server.js"`

## Adding typescript
`npm i typescript ts-node @types/express`
`./node_modules/.bin/tsc --init`

`npm i @types/jest jest ts-jest`

`npm i @types/supertest supertest`

## add on package.json -> scripts
`"test": "jest --no-cache"`

## Implement at lest a test

## add on package.json -> scripts -> prod build
`"build": "tsc",`
`"prod": "npm run build && node dist/entry.js"`

## Convert all files to typeScript
