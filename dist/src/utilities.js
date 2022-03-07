"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripIndent = exports.applyExample = exports.hash = exports.statusTextToStage = exports.statusTextToAllure = void 0;
const crypto_1 = require("crypto");
const allure_js_commons_1 = require("allure-js-commons");
const statusTextToAllure = (status) => {
    if (status === "passed") {
        return allure_js_commons_1.Status.PASSED;
    }
    if (status === "skipped") {
        return allure_js_commons_1.Status.SKIPPED;
    }
    if (status === "failed") {
        return allure_js_commons_1.Status.FAILED;
    }
    return allure_js_commons_1.Status.BROKEN;
};
exports.statusTextToAllure = statusTextToAllure;
const statusTextToStage = (status) => {
    if (status === "passed") {
        return allure_js_commons_1.Stage.FINISHED;
    }
    if (status === "skipped") {
        return allure_js_commons_1.Stage.PENDING;
    }
    if (status === "failed") {
        return allure_js_commons_1.Stage.INTERRUPTED;
    }
    return allure_js_commons_1.Stage.INTERRUPTED;
};
exports.statusTextToStage = statusTextToStage;
const hash = (data) => {
    return (0, crypto_1.createHash)("md5").update(data).digest("hex");
};
exports.hash = hash;
const applyExample = (text, example) => {
    if (example === undefined) {
        return text;
    }
    for (const argName in example.arguments) {
        if (!example.arguments[argName]) {
            continue;
        }
        text = text.replace(new RegExp(`<${argName}>`, "g"), `<${example.arguments[argName]}>`);
    }
    return text;
};
exports.applyExample = applyExample;
const stripIndent = (data) => {
    const match = data.match(/^[^\S\n]*(?=\S)/gm);
    if (match !== null) {
        const indent = Math.min(...match.map((sp) => sp.length));
        return data.replace(new RegExp(`^.{${indent}}`, "gm"), "");
    }
    return data;
};
exports.stripIndent = stripIndent;
//# sourceMappingURL=utilities.js.map