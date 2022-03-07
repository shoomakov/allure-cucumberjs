"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const allure_js_commons_1 = require("allure-js-commons");
const CucumberJSAllureReporter_1 = require("../../src/CucumberJSAllureReporter");
class Reporter extends CucumberJSAllureReporter_1.CucumberJSAllureFormatter {
    constructor(options) {
        super(options, new allure_js_commons_1.AllureRuntime({ resultsDir: "./out/allure-results" }), {});
    }
}
exports.default = Reporter;
//# sourceMappingURL=report.js.map