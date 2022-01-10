const CircleCI = require('@circleci/circleci-config-sdk');

const nodeExecutor = new CircleCI.executor
.DockerExecutor("cypress/browsers:node16.13.0-chrome95-ff94","medium");

module.exports = nodeExecutor;
