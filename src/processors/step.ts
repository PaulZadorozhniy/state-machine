import { StepProcess, Processor } from "../types";

export class StepProcessor implements Processor {
  private process: StepProcess

  constructor(process: StepProcess) {
    this.process = process
  }

  async run() {
    await this.process.run()
  }
}