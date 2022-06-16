import { Process, IFSM, Processor, } from "./types";
import * as processorsFactory from "./processors/factory";


export class FSM implements IFSM {
  private currentState: Process
  private currentStateProcessor: Processor

  constructor(process: Process) {
    this.currentState = process
    this.currentStateProcessor = processorsFactory.create(this.currentState, this)
  }

  async run(): Promise<void> {
    await this.changeState(this.currentState)
  }

  async changeState(state: Process): Promise<void> {
    this.currentState = state
    this.currentStateProcessor = processorsFactory.create(this.currentState, this)

    this.currentStateProcessor.send(`Hello from FSM to ${this.currentState.type} state processor`)
    await this.currentStateProcessor.run()
  }

  send(data: any): void {
    this.currentStateProcessor.send(data);
  }
}