import { Process, IFSM, } from "./types";
import * as processorsFactory from "./processors/factory";


export class FSM implements IFSM {
  async run(process: Process) {
    const processor = processorsFactory.create(process, this)

    processor.run()
  }
}