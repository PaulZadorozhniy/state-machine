import { StepProcess, Processor } from "../types";

export class StepProcessor implements Processor {
  private process: StepProcess

  constructor(process: StepProcess) {
    this.process = process
  }

  async run(): Promise<void> {
    await this.process.run()
  }

  send(data: any): void {
    console.log('Sent data:', data)
  }
}