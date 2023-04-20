export class Logger {
    private readonly logDiv: HTMLDivElement | null;
    constructor(selector: string) {
        this.logDiv = document.querySelector(`#${selector}`);
    }

    logInfo(msg: string): void {
        const logrender = document.createElement("div")
        logrender.classList.add("info")
        logrender.textContent = this.createMessage(msg);
        this.logDiv?.appendChild(logrender)
    }

    logError(msg: string): void {
        const logrender = document.createElement("div")
        logrender.classList.add("error")
        logrender.textContent = this.createMessage(msg);
        this.logDiv?.appendChild(logrender)
    }

    logDebug(msg: string): void {
        const logrender = document.createElement("div")
        logrender.classList.add("debug")
        logrender.textContent = this.createMessage(msg);
        this.logDiv?.appendChild(logrender)
    }

    private createMessage(msg: string): string {
        const now = new Date();
        return `[${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}]: ${msg}`;
    }
}