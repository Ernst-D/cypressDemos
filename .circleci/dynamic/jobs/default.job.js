const CircleCI = require("@circleci/circleci-config-sdk");
const nodeExecutor = require("../executors/node.executor");

const cypressDefault = new CircleCI.Job("Default cypress tests",nodeExecutor);
cypressDefault
.addStep(new CircleCI.commands.Checkout())
.addStep(new CircleCI.commands.Run({
    name:"Install packages",
    command:"npm i"}
))
.addStep(new CircleCI.commands.Run({
    name:"Run Webmail e2e",
    command:"npx cypress run --spec cypress/integration/1-getting-started/todo.spec.js"
}))
.addStep(new CircleCI.commands.StoreArtifacts({
    path:"./cypress/videos"
}));

module.exports = cypressDefault;
