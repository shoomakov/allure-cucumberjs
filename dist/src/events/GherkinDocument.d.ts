import { GherkinStep } from "./GherkinStep";
import { GherkinTestCase } from "./GherkinTestCase";
export declare class GherkinDocument {
    type?: string;
    feature?: {
        type: string;
        tags: {
            name: string;
        }[];
        name: string;
        description: string;
        children: GherkinTestCase[];
    };
    comments: string[];
    stepMap?: Map<number, GherkinStep>;
    caseMap?: Map<number, GherkinTestCase>;
}
