const fs = require("fs");
const CircleCI = require('@circleci/circleci-config-sdk');
const webmailJob = require("./jobs/webmail.job");
const cypressDefault = require("./jobs/default.job");

const config = new CircleCI.Config();
config.addJob(cypressDefault).addJob(webmailJob);

const cypressWorkflow = new CircleCI.Workflow("e2e-workflow");
if(process.env.JOB_NAME == "cypress"){
  cypressWorkflow.addJob(cypressDefault);
}
else{
  cypressWorkflow.addJob(webmailJob);
}

config.addWorkflow(cypressWorkflow);

const MyYamlConfig = config.stringify();
fs.writeFile("./dynamicConfig.yml", MyYamlConfig, (err) => {
  if (err) {
    console.log(err);
    return;
  }
});

