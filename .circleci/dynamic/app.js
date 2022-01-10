const fs = require("fs");
const CircleCI = require('@circleci/circleci-config-sdk');

const config = new CircleCI.Config();
const cypressWorkflow = new CircleCI.Workflow("cypressWorkflow");

config.addWorkflow(cypressWorkflow);

const nodeExecutor = new CircleCI.executor.DockerExecutor("cypress/browsers:node16.13.0-chrome95-ff94","medium");
const e2eCypressJob = new CircleCI.Job("Cypress e2e",nodeExecutor);
config.addJob(e2eCypressJob);

e2eCypressJob
.addStep(new CircleCI.commands.Checkout())
.addStep(new CircleCI.commands.Run({
    name:"Install packages",
    command:"npm i"}
))
.addStep(new CircleCI.commands.Run({
    name:"Run Webmail e2e",
    command:"npm run e2e:webmail"
}))
.addStep(new CircleCI.commands.StoreArtifacts({
    path:"./cypress/screenshots"
}));

cypressWorkflow.addJob(e2eCypressJob);

const MyYamlConfig = config.stringify();
fs.writeFile("./dynamicConfig.yml", MyYamlConfig, (err) => {
  if (err) {
    console.log(err);
    return;
  }
});

