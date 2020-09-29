# Focus College ACSD Assignment 4

This respository is intended for the use of Focus College Students enrolled in the Advanced Certificate of Software Development located in Kelowna, BC and Surrey, BC.

---

## task two
--- 
In this application I have downloaded typescript and I added NPM scripts so that you can, in one cli command each:
  - compile
  - start
  - compile & start

To start & compile this applicatin please run the following command:

  ```
  npm run start
  ```

## task three 
---
I add eslint package to the application and I set it's files and I modefied the NPM script so that I can run 
  - compile
  - start
  - lint
  - compile & run
  - lint, compile & run

  using one cli command.

  to use try this package command please run the following command:
  ```
  npm run start:dev:fix
  ```

## task 4

I add Prettier to my project and modify my NPM script so I can now in one cli command run each:
- compile
- start
- lint
- format
- compile & run
- lint, format, compile & run

to run this Use the following command:
```
npm run start:dev
```

## task 5

I added Mocha & Chai to my project I also modify my NPM script so I can now in one cli command run each:
- compile
- start
- lint
- format
- test
- compile & run
- lint, format, test, compile & run

to run (lint, format, test, compile & run) Use the following command:
```
npm run start:dev
```

## task 6
I adde nyc istanbul to my project so I can run my test with coverage, now I have the following in  my npm script:

- compile
- start
- lint
- format
- test
- compile & run
- lint, format, test, compile & run

And you can run the test with coverage by using the following command:
```
npm run coverage
```
or if you want to run everything without the coverage use the following command:
```
 npm run start:dev
```

## task 7

I added yargs to my project and I setup yargs to accept a single parameter, and have my program console.log "Hello" and the value of the parameter 
and I set the parameter to be a name of a person.

to run this parameter use the following cli command:
```
npm start -- hello -n (any name)
```

## task 8
I created a module with a single function that will console.log "Hello" any name that being assigned to the parameter.
and then I wrote a test to validate that my function works as intended. 

to run the test coverage please run the following command:
```
 npm run coverage
```


Sincerely,
Angham Alshahoud