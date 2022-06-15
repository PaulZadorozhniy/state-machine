import { Process, ProcessingTypes, IFSM, } from "./types";
import { SuccessivelyProcessor } from "./processors/successively";
import { ParallelProcessor } from "./processors/parallel";
import { ConditionalProcessor } from "./processors/conditional";
import { StepProcessor } from "./processors/step";

export class FSM implements IFSM {
  async run(process: Process) {
    switch (process.type) {
      case ProcessingTypes.successively:
        const successivelyProcessor = new SuccessivelyProcessor(this)
        successivelyProcessor.run(process)
        break

      case ProcessingTypes.parallel:
        const parallelProcessor = new ParallelProcessor(this)
        parallelProcessor.run(process)
        break

      case ProcessingTypes.if:
        const conditionalProcessor = new ConditionalProcessor(this)
        conditionalProcessor.run(process)
        break

      case ProcessingTypes.step:
        const stepProcessor = new StepProcessor()
        stepProcessor.run(process)
        break
    }
  }
}