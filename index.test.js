import { camelize } from './index';

test('camelizes a lowercase sentence', () => {
  expect(camelize('perform this task')).toBe('performThisTask');
});

test('camelizes a mixed case sentence', () => {
  expect(camelize('Perform thIS taSk')).toBe('performThisTask');
});

test('separates by spaces, dashes, or underscores', () => {
  expect(camelize('Perform-thIS_taSk please')).toBe('performThisTaskPlease');
});

test('strips non-A-Z characters', () => {
  expect(camelize('29Perfor\m\-th&IS_taSk ple93.3ase!')).toBe('performThisTaskPlease');
});

test('ignores acronyms/initialisms', () => {
  expect(camelize('29Perfor\m\-th&IS_TASK ple93.3ase!')).toBe('performThisTaskPlease');
});
