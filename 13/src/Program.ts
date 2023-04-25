import { Logger } from "./helpers/Logger";

export class Program {
    private programName: string = "RobotWarrior";
    private static nextVersion: number = 1
    private logger: Logger;
    private currentVerzio: number;

    constructor(nev: string, logger: Logger) {
        this.logger = logger;
        this.programName = nev;
        this.currentVerzio = Program.nextVersion;
        this.nextVersion()
        this.logger.logDebug(`Létrejött a ${this.programName} program ${this.currentVerzio} verziója`)
    }

    public toString(): string {
        return `${this.programName}, verzio: ${this.currentVerzio}`
    }

    nextVersion() {
        Program.nextVersion++;
    }

    log(msg: string): void {
        this.logger.logInfo(msg)
    }

    setLogger(logger: Logger): void {
        this.logger = logger
    }
}