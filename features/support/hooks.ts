import * as path from "path";
import { After, Before, ITestCaseHookParameter } from "@cucumber/cucumber";
import { copySync, removeSync } from "fs-extra";

const projectPath = path.join(__dirname, "..", "..");

Before(function ({ gherkinDocument }: ITestCaseHookParameter) {
  this.tmpDir = path.join(
    projectPath,
    "tmp",
    `${path.basename(<string>gherkinDocument.uri)}_${gherkinDocument.feature?.location.line}`,
  );
  const dummyStepsPath = path.join(__dirname, "..", "step_definitions/dummy.steps.js");
  copySync(dummyStepsPath, path.join(this.tmpDir, "/features/step_definitions/dummy.steps.js"));
});

After(function () {
  const tmp = (this.tmpDir = path.join(projectPath, "tmp"));
  removeSync(tmp);
});
