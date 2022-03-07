"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delayFail = exports.delayPass = void 0;
const assert_1 = __importDefault(require("assert"));
const cucumber_1 = require("@cucumber/cucumber");
const delayPass = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};
exports.delayPass = delayPass;
const delayFail = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error("Async error")), ms);
    });
};
exports.delayFail = delayFail;
(0, cucumber_1.When)("do passing step", () => { });
(0, cucumber_1.When)("do failing step", () => (0, assert_1.default)(false, "hello from failed step"));
(0, cucumber_1.When)("do async passing step", () => (0, exports.delayPass)(10));
(0, cucumber_1.When)("do async failing step", () => (0, exports.delayFail)(10));
(0, cucumber_1.When)("do ambiguous step", () => { });
(0, cucumber_1.Then)("do ambiguous step", () => { });
//# sourceMappingURL=dummy.steps.js.map