import { info } from '@actions/core';
import { Inputs } from './inputs';

export const run = async (inputs: Inputs): Promise<void> => {
  info(JSON.stringify(inputs));
};
