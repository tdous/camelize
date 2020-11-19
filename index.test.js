import { camelize } from './index';

test('camelizes a lowercase sentence', () => {
  expect(camelize('perform this task')).toBe('performThisTask');
});

test('camelizes a mixed case sentence', () => {
  expect(camelize('Perform thIS taSk')).toBe('performThisTask');
});

test('separates by spaces, hyphens, dots, or underscores', () => {
  expect(camelize('dO.Perform-thIS_taSk please')).toBe(
    'doPerformThisTaskPlease'
  );
});

test('strips non-A-Z characters', () => {
  expect(camelize('dO.29Perform-th&IS_taSk ple93;3ase!')).toBe(
    'doPerformThisTaskPlease'
  );
});

test('ignores acronyms/initialisms', () => {
  expect(camelize('dO.29Perform-th&IS_TASK ple93;3ase!')).toBe(
    'doPerformThisTASKPlease'
  );
});

test('sanity check', () => {
  expect(
    camelize(
      'dO.""pE?r\'f:or@m~#\\\';}{|__tHIs`¬+)(*&)!"^)!^)!2 task8/?.,><#--plE&£$Ase---'
    )
  ).toBe('doPerformThisTaskPlease');
});

test('optional PascalCase', () => {
  expect(camelize('do-perform_THIS task --please', { pascal: true })).toBe(
    'DoPerformTHISTaskPlease'
  );
});

test('optional divider', () => {
  expect(
    camelize(
      'DO.""PE?R\'F:OR@M~#\\\';}{|__THIS`¬+)(*&)!"^)!^)!2 TASK8/?.,><#--PLE&£$ASE---',
      { divider: '_' }
    )
  ).toBe('DO_PERFORM_THIS_TASK_PLEASE');
});
