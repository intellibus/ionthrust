import { suite } from 'uvu';
import * as assert from 'uvu/assert';
import { project } from '../src';

const test = suite('Ion Thrust Initial Setup');

test('Project Name is Correct', async () => {
  assert.equal(project, 'ionthrust');
});

export const { run } = test;
