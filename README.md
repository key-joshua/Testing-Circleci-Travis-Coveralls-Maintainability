# learnning-Testing-CircleCI-Travis-Coveralls-Maintainability
#### learnning about:
- Testing
- Circleci
- Travis 
- Coveralls
- Maintainability
<br><br>
[![CircleCI](https://circleci.com/gh/key-joshua/learn-Testing-Circleci-Travis-Coveralls-Maintainability.svg?style=svg)](https://circleci.com/gh/key-joshua/learn-Testing-Circleci-Travis-Coveralls-Maintainability)
[![Build Status](https://travis-ci.org/key-joshua/learn-Testing-Circleci-Travis-Coveralls-Maintainability.svg?branch=master)](https://travis-ci.org/key-joshua/learn-Testing-Circleci-Travis-Coveralls-Maintainability)
[![Coverage Status](https://coveralls.io/repos/github/key-joshua/learn-Testing-Circleci-Travis-Coveralls-Maintainability/badge.svg?branch=master)](https://coveralls.io/github/key-joshua/learn-Testing-Circleci-Travis-Coveralls-Maintainability?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/8059d61dd68ac9ea05cb/maintainability)](https://codeclimate.com/github/key-joshua/learn-Testing-Travis-Coveralls-Maintainability/maintainability)


## Features

- All teachers should be able to post class marks.
- All students  should be able to view class marks.
- All students should be able to view a given marks.
- All teachers should be able to patch/update a given class marks.
- All teachers should be able to delete/remove a given class marks.

#### TABLE OF END POINTS SPECIFICATION AND DESCRIPTION

| VERBS  | ENDPOINTS                | STATUS   | ACCESS            | DESCRIPTION                                          |
|--------|--------------------------|----------|-------------------|------------------------------------------------------|
| POST   | /api/v1/students/        |  201 OK  | private(Teachers) | Teachers should be able to publish class marks       |
| GET    | /api/v1/students/        |  200 OK  | public            | Students should be able to view all class marks      |
| GET    | /api/v1/students/:id     |  200 OK  | public            | Students should be able to viewa given class marks   |
| PATCH  | /api/v1/students/:id     |  200 OK  | private(Teachers) | Teachers should be able to update/patch class marks  |
| DELETE | /api/v1/students/:id     |  204 OK  | private(Teachers) | Teachers should be able to delete/remove class marks |

#### Getting Started

- Clone this project on your machine , by running this command on in your command line or Terminal:
 ```
git clone https://github.com/key-joshua/learn-Testing-Circleci-Travis-Coveralls-Maintainability.git
 ```
 - Install the required dependencies found in package.json by running this command:
 ```
npm install
 ```
 - And then to start running  this project on your machine , by run this command:
 ```
npm run server
 ```
 - then to run test, run this command:
 ```
npm run test
```

#### Develoer: [Key Joshua](https://www.instagram.com/key_joshua/).