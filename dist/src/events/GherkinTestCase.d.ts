import { Example } from "./Example";
import { GherkinExample } from "./GherkinExample";
import { GherkinStep } from "./GherkinStep";
export declare class GherkinTestCase {
    type?: string;
    location?: {
        line: number;
    };
    tags?: {
        name: string;
    }[];
    name?: string;
    description?: string;
    steps: GherkinStep[];
    stepMap: Map<number, GherkinStep>;
    examples?: GherkinExample[];
    example?: Example;
}
