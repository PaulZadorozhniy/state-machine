import { ProcessingTypes, Process } from "./types";
import { FSM } from "./finitStateMachine";


const process: Process = {
  type: ProcessingTypes.successively,
  children: [
    {
      type: ProcessingTypes.step,
      run: async () => console.log('step 1'),
    },
    {
      type: ProcessingTypes.step,
      run: async () => console.log('step 2'),
    },
    {
      type: ProcessingTypes.parallel,
      children: [
        {
          type: ProcessingTypes.step,
          run: async () => console.log('step 3'),
        },
        {
          type: ProcessingTypes.step,
          run: async () => console.log('step 4'),
        },
      ]
    },
    {
      type: ProcessingTypes.if,
      condition: 2 > 5,
      then: {
        type: ProcessingTypes.step,
        run: async () => console.log('step 5'),
      },
      else: {
        type: ProcessingTypes.step,
        run: async () => console.log('step 6'),
      }
    },
  ]
}

const fsm = new FSM();

(async () => await fsm.run(process))()

