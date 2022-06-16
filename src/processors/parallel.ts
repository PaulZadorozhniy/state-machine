import { ParallelProcess, IFSM, Processor } from "../types";

export class ParallelProcessor implements Processor {
  private fsm: IFSM
  private process: ParallelProcess

  constructor(fsm: IFSM, process: ParallelProcess) {
    this.fsm = fsm
    this.process = process
  }

  async run() {
    const processes = this.process.children.map(child => this.fsm.changeState(child))

    await Promise.all(processes)
  }

  send(data: any) {
    console.log('Sent data:', data)
  }
}