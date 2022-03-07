import { Stage, Status } from "allure-js-commons";
import { Example } from "./events/Example";
export declare const statusTextToAllure: (status?: string | undefined) => Status;
export declare const statusTextToStage: (status?: string | undefined) => Stage;
export declare const hash: (data: string) => string;
export declare const applyExample: (text: string, example: Example | undefined) => string;
export declare const stripIndent: (data: string) => string;
