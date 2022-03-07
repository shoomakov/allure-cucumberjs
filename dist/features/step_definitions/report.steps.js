import { Then, When } from "@cucumber/cucumber";
import chai, { expect } from "chai";
import { ChaiPartial } from "../support/chai-partial";
chai.use(ChaiPartial);
Then(/^it has result for "(.*)"$/, function (name) {
    expect(this.allureReport.testResults).to.partial([{ name }]);
});
When(/^I choose result for "(.*)"$/, function (name) {
    this.ctx = this.allureReport.testResults.find((result) => result.name === name);
});
When(/^I choose step "(.*)"$/, function (name) {
    this.ctx = this.ctx.steps.find((step) => step.name === name);
});
Then(/^it has step "(.*)"$/, function (name) {
    expect(this.ctx).have.property("steps");
    expect(this.ctx.steps).to.partial([{ name }]);
});
Then(/^it has status "(passed|failed|skipped|broken|undefined)"$/, function (status) {
    expect(this.ctx).to.partial({ status });
});
Then(/^it has label "(.*)" with value "(.*)"$/, function (name, value) {
    expect(this.ctx).partial({ labels: [{ name, value }] });
});
Then(/^it has description "(.*)"$/, function (description) {
    expect(this.ctx).partial({ description });
});
Then(/^it has link with url "(.*)" with name "(.*)" and with type "(.*)"$/, function (url, name, type) {
    expect(this.ctx).partial({ links: [{ url, name, type }] });
});
//# sourceMappingURL=report.steps.js.map