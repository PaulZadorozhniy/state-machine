import { ConditionalProcess, IFSM, Processor } from "../types";

export class ConditionalProcessor implements Processor {
  private fsm: IFSM
  private process: ConditionalProcess

  constructor(fsm: IFSM, process: ConditionalProcess) {
    this.fsm = fsm
    this.process = process
  }

  async run() {
    if (this.process.condition) {
      await this.fsm.changeState(this.process.then)
    } else {
      await this.fsm.changeState(this.process.else)
    }
  }

  send(data: any) {
    console.log('Sent data:', data)
  }
}