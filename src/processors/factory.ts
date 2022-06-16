import { Process, IFSM, ProcessingTypes, Processor } from "../types"
import { SuccessivelyProcessor } from "./successively"
import { ParallelProcessor } from "./parallel"
import { ConditionalProcessor } from "./conditional"
import { StepProcessor } from "./step"

export function create(process: Process, fsm: IFSM): Processor {
  switch (process.type) {
    case ProcessingTypes.successively:
      return new SuccessivelyProcessor(fsm, process)

    case ProcessingTypes.parallel:
      return new ParallelProcessor(fsm, process)

    case ProcessingTypes.if:
      return new ConditionalProcessor(fsm, process)

    case ProcessingTypes.step:
      return new StepProcessor(process)
  }
}