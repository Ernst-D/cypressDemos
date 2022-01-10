const fs = require("fs");
const CircleCI = require('@circleci/circleci-config-sdk');
const webmailJob = require("./jobs/webmail.job");
const cypressDefault = require("./jobs/default.job");

const config = new CircleCI.Config();
config.addJob(cypressDefault).addJob(webmailJob);

const cypressWorkflow = new CircleCI.Workflow("e2e-workflow");

cypressWorkflow.addJob(cypressDefault);

config.addWorkflow(cypressWorkflow);

const MyYamlConfig = config.stringify();
fs.writeFile("./dynamicConfig.yml", MyYamlConfig, (err) => {
  if (err) {
    console.log(err);
    return;
  }
});

