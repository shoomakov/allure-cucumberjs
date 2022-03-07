import { AllureRuntime } from "allure-js-commons";
import { CucumberJSAllureFormatter } from "../../src/CucumberJSAllureReporter";
export default class Reporter extends CucumberJSAllureFormatter {
    constructor(options) {
        super(options, new AllureRuntime({ resultsDir: "./out/allure-results" }), {});
    }
}
//# sourceMappingURL=report.js.map