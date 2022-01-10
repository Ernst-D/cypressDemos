const CircleCI = require("@circleci/circleci-config-sdk");
const nodeExecutor = require("../executors/node.executor");

const webmailJob = new CircleCI.Job("webmail e2e test",nodeExecutor);
webmailJob
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

module.exports = webmailJob;
