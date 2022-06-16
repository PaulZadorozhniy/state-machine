export enum ProcessingTypes {
  successively = 'successively',
  step = 'step',
  parallel = 'parallel',
  if = 'if'
}

export type Process = ConditionalProcess | StepProcess | ParallelProcess | SuccessivelyProcess

export interface ConditionalProcess {
  type: ProcessingTypes.if
  condition: boolean
  then: Process
  else: Process
}

export interface StepProcess {
  type: ProcessingTypes.step
  run: () => Promise<void>
}

export interface ParallelProcess {
  type: ProcessingTypes.parallel,
  children: Process[]
}

export interface SuccessivelyProcess {
  type: ProcessingTypes.successively,
  children: Process[]
}

export interface IFSM {
  run: (process: Process) => Promise<void>
}

export interface Processor {
  run: () => Promise<void>
}