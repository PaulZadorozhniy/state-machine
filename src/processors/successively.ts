import { SuccessivelyProcess, IFSM, Processor } from "../types";

export class SuccessivelyProcessor implements Processor {
  private fsm: IFSM
  private process: SuccessivelyProcess

  constructor(fsm: IFSM, process: SuccessivelyProcess) {
    this.fsm = fsm
    this.process = process
  }

  async run() {
    for (const child of this.process.children) {
      await this.fsm.changeState(child)
    }
  }

  send(data: any) {
    console.log('Sent data:', data)
  }

}