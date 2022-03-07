import { createHash } from "crypto";
import { Stage, Status } from "allure-js-commons";
export const statusTextToAllure = (status) => {
    if (status === "passed") {
        return Status.PASSED;
    }
    if (status === "skipped") {
        return Status.SKIPPED;
    }
    if (status === "failed") {
        return Status.FAILED;
    }
    return Status.BROKEN;
};
export const statusTextToStage = (status) => {
    if (status === "passed") {
        return Stage.FINISHED;
    }
    if (status === "skipped") {
        return Stage.PENDING;
    }
    if (status === "failed") {
        return Stage.INTERRUPTED;
    }
    return Stage.INTERRUPTED;
};
export const hash = (data) => {
    return createHash("md5").update(data).digest("hex");
};
export const applyExample = (text, example) => {
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
export const stripIndent = (data) => {
    const match = data.match(/^[^\S\n]*(?=\S)/gm);
    if (match !== null) {
        const indent = Math.min(...match.map((sp) => sp.length));
        return data.replace(new RegExp(`^.{${indent}}`, "gm"), "");
    }
    return data;
};
//# sourceMappingURL=utilities.js.map