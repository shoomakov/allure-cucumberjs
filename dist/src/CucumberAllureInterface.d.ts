/// <reference types="node" />
import { Allure, AllureRuntime, AllureStep, AllureTest, AttachmentOptions, ContentType, ExecutableItemWrapper, Status, StepInterface } from "allure-js-commons";
import { CucumberJSAllureFormatter } from "./CucumberJSAllureReporter";
export declare class CucumberAllureInterface extends Allure {
    private readonly reporter;
    constructor(reporter: CucumberJSAllureFormatter, runtime: AllureRuntime);
    step<T>(name: string, body: (step: StepInterface) => T): T;
    logStep(name: string, status?: Status): void;
    attachment(name: string, content: Buffer | string, options: ContentType | string | AttachmentOptions): void;
    testAttachment(name: string, content: Buffer | string, options: ContentType | string | AttachmentOptions): void;
    addParameter(name: string, value: string): void;
    addLabel(name: string, value: string): void;
    addIssueLink(url: string, name: string): void;
    addTmsLink(url: string, name: string): void;
    protected get currentExecutable(): ExecutableItemWrapper;
    protected get currentTest(): AllureTest;
    private startStep;
}
export declare class WrappedStep {
    private readonly reporter;
    private readonly step;
    constructor(reporter: CucumberJSAllureFormatter, step: AllureStep);
    startStep(name: string): WrappedStep;
    setStatus(status?: Status): void;
    setError(error: Error): void;
    endStep(): void;
    run<T>(body: (step: StepInterface) => T): T;
}
