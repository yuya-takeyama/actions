import { getInputs } from './inputs';
import { setFailed } from '@actions/core';
import { run } from './run';

run(getInputs()).catch(err => {
  const failure = err instanceof Error ? err.message : JSON.stringify(err);
  setFailed(failure);
});
