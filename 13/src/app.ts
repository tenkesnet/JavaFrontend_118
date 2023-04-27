import { MyRanger } from './componens/MyRanger';
import { Program } from "./Program";
import { Logger, Helper as log2 } from "./helpers/Logger";

console.log("Hello 12. óra");

let mainProgram: Program = new Program("RobotWarrior", new Logger("left"));
let mainProgram2: Program = new Program("MásodikWarrior", new Logger("body"));
let mellekProgram: Program = new Program("MásodikWarrior", new Logger("log"));

let logInfo: Logger = new Logger("log")
mainProgram.setLogger(logInfo)
mainProgram2.setLogger(logInfo)
mellekProgram.setLogger(logInfo)

let ranger = new MyRanger("warrior1")
ranger.start()

mainProgram.log("mainProgram")
mainProgram2.log("másodikProgram")
mellekProgram.log("mellékProgram")

log2.logMasik("jkléjlkj")





