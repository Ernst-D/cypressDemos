const fs = require("fs");
const CircleCI = require('@circleci/circleci-config-sdk');
const webmailJob = require("./jobs/webmail.job");
const cypressDefault = require("./jobs/default.job");

const config = new CircleCI.Config();
const cypressWorkflow = new CircleCI.Workflow("cypressWorkflow");

if(process.env.CYPRESS_DEFAULT_JOB == 1){
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

