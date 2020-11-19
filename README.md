# camelize
String transformation to camelCase.

- Allowed 'word' separators are *space*, *hyphen*, *dot*, and *underscore*.
- Strips anything else that isn't a-z/A-Z.
- Ignores acronyms/initialisms.
- Defaults to dromedaryCase, optional PascalCase (see Usage options).

### Getting it

```sh
npm install --save tdous/camelize
# or
npm install --save-dev tdous/camelize
```

### Usage

```javascript
import { camelize } from 'camelize';

let output;

output = camelize('perform this task');
// output === 'performThisTask'

output = camelize('Perform thIS taSk');
// output === 'performThisTask'

output = camelize('dO.Perform-thIS_taSk please');
// output === 'doPerformThisTaskPlease'

output = camelize('dO.29Perfor\m\-th&IS_taSk ple93;3ase!');
// output === 'doPerformThisTaskPlease'

output = camelize('dO.P29Perfor\m\-th&IS_TASK ple93;3ase!');
// output === 'doPerformThisTASKPlease'

output = camelize('dO.""pE?r\'f:or@m~#\\\';}{|__tHIs`¬+)(*&)!"^)!^)!2 task8/?.,><#--plE&£$Ase---');
// output === 'doPerformThisTaskPlease'

output = camelize(
  'dO.""pE?r\'f:or@m~#\\\';}{|__tHIs`¬+)(*&)!"^)!^)!2 task8/?.,><#--plE&£$Ase---'
  { pascal: true }
);
// output === 'DoPerformThisTaskPlease'

output = camelize(
  'DO.""PE?R\'F:OR@M~#\\\';}{|__THIS`¬+)(*&)!"^)!^)!2 TASK8/?.,><#--PLE&£$ASE---',
  { divider: '_' }
);
// output === 'DO_PERFORM_THIS_TASK_PLEASE'
```

### Options

**PascalCase**
```javascript
output = camelize('do-perform_THIS task --please', { pascal: true });
// output === 'DoPerformTHISTaskPlease'
```