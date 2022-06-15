import { ParallelProcess, IFSM } from "../types";

export class ParallelProcessor {
  private fsm: IFSM

  constructor(fsm: IFSM) {
    this.fsm = fsm
  }

  async run(process: ParallelProcess) {
    const processes = process.children.map(child => this.fsm.run(child))

    await Promise.all(processes)
  }
}