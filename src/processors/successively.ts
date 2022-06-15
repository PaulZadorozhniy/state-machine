import { SuccessivelyProcess, IFSM } from "../types";

export class SuccessivelyProcessor {
  private fsm: IFSM

  constructor(fsm: IFSM) {
    this.fsm = fsm
  }

  async run(process: SuccessivelyProcess) {
    for (const child of process.children) {
      await this.fsm.run(child)
    }
  }
}