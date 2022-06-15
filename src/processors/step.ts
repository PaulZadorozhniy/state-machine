import { StepProcess } from "../types";

export class StepProcessor {
  async run(process: StepProcess) {
    await process.run()
  }
}