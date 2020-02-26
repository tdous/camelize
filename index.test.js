import { camelize } from './index';

test('camelizes a lowercase sentence', () => {
  expect(camelize('perform this task')).toBe('performThisTask');
});

test('camelizes a mixed case sentence', () => {
  expect(camelize('Perform thIS taSk')).toBe('performThisTask');
});

test('separates by spaces, hyphens, dots, or underscores', () => {
  expect(camelize('dO.Perform-thIS_taSk please')).toBe('doPerformThisTaskPlease');
});

test('strips non-A-Z characters', () => {
  expect(camelize('dO.29Perfor\m\-th&IS_taSk ple93;3ase!')).toBe('doPerformThisTaskPlease');
});

test('ignores acronyms/initialisms', () => {
  expect(camelize('dO.29Perfor\m\-th&IS_TASK ple93;3ase!')).toBe('doPerformThisTASKPlease');
});

test('sanity check', () => {
  expect(camelize('dO.""pE?r\'f:or@m~#\\\';}{|__tHIs`¬+)(*&)!"^)!^)!2 task8/?.,><#--plE&£$Ase---')).toBe('doPerformThisTaskPlease');
});
