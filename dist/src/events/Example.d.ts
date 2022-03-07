import { GherkinExample } from "./GherkinExample";
export declare class Example {
    line: number;
    arguments: {
        [key: string]: string;
    };
}
export declare const examplesToSensibleFormat: (examples: GherkinExample[]) => Example[];
