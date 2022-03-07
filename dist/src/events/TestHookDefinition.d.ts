import { HookCode, HookOptions } from "@cucumber/cucumber";
export interface TestHookDefinition {
    code: HookCode;
    line: number;
    options?: HookOptions;
    pattern?: any;
    uri: string;
}
