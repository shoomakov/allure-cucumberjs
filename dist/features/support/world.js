import * as path from "path";
import { PassThrough } from "stream";
import { Cli as CucumberCli, setWorldConstructor } from "@cucumber/cucumber";
import * as fs from "fs-extra";
import glob from "glob";
import VError from "verror";
const getAllureReport = (reportPath) => {
    const allureReport = { testResults: [] };
    const files = glob.sync(path.join(reportPath, "/*-result.json"));
    files.forEach((file) => {
        const content = fs.readJSONSync(file);
        allureReport.testResults.push(content);
    });
    return allureReport;
};
class AllureWorld {
    constructor() {
        this.tmpDir = "";
        this.formatterPath = "support/allure-formatter.ts";
        this.formatterOutPath = "../out/allure-results";
        this.allureReport = { testResults: [] };
        this.result = { stdout: "", stderr: "" };
    }
    async run() {
        const formatterPath = path.join(this.tmpDir, this.formatterPath);
        const formatterOutPath = path.join(this.tmpDir, this.formatterOutPath);
        const argv = [
            "",
            "",
            "--backtrace",
            "--require-module=ts-node/register",
            `--format=${formatterPath}:.dummy.txt`,
        ];
        const cwd = this.tmpDir;
        let error;
        let stdout = "";
        let stderr = "";
        const stdoutStream = new PassThrough();
        stdoutStream.on("readable", () => {
            let chunk;
            while ((chunk = stdoutStream.read())) {
                stdout += Buffer.concat([chunk]).toString("utf8");
            }
        });
        const cucumberClient = new CucumberCli({ argv: argv, cwd: cwd, stdout: stdoutStream });
        try {
            const { success } = await cucumberClient.run();
            if (!success) {
                error = new Error("CLI exited with non-zero");
            }
        }
        catch (err) {
            error = err;
            stderr = VError.fullStack(error);
        }
        stdoutStream.end();
        this.allureReport = getAllureReport(formatterOutPath);
        this.result = { stdout, stderr, error: error };
    }
    attach(data, mediaType, callback) {
        return undefined;
    }
    log(text) {
        return undefined;
    }
}
setWorldConstructor(AllureWorld);
//# sourceMappingURL=world.js.map