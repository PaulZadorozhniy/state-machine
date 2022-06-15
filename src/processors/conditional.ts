import { ConditionalProcess, IFSM } from "../types";

export class ConditionalProcessor {
  private fsm: IFSM

  constructor(fsm: IFSM) {
    this.fsm = fsm
  }

  async run(process: ConditionalProcess) {
    if (process.condition) {
      await this.fsm.run(process.then)
    } else {
      await this.fsm.run(process.else)
    }
  }
}