import assert from "assert";
import { Then, When } from "@cucumber/cucumber";
export const delayPass = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};
export const delayFail = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error("Async error")), ms);
    });
};
When("do passing step", () => { });
When("do failing step", () => assert(false, "hello from failed step"));
When("do async passing step", () => delayPass(10));
When("do async failing step", () => delayFail(10));
When("do ambiguous step", () => { });
Then("do ambiguous step", () => { });
//# sourceMappingURL=dummy.steps.js.map