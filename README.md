# camelize
String transformation to camelCase.

- Allowed 'word' separators are *space*, *hyphen*, and *underscore*.
- Strips anything else that isn't a-z/A-Z.
- Ignores acronyms/initialisms.

This opinionated behaviour suits my needs. Might add options as time goes by.

#### Getting it

```sh
npm install --save tdous/camelize
# or
npm install --save-dev tdous/camelize
```

#### Usage

```javascript
import { camelize } from 'camelize';

let output;

output = camelize('perform this task');
// output === 'performThisTask'

output = camelize('Perform thIS taSk');
// output === 'performThisTask'

output = camelize('Perform-thIS_taSk please');
// output === 'performThisTaskPlease'

output = camelize('29Perfor\m\-th&IS_taSk ple93.3ase!');
// output === 'performThisTaskPlease'

output = camelize('29Perfor\m\-th&IS_TASK ple93.3ase!');
// output === 'performThisTASKPlease'

output = camelize('""pE?r\'f:or@m~#\\\';}{|__tHIs`¬+)(*&)!"^)!^)!2 task8/?.,><#--plE&£$Ase---');
// output === 'performThisTaskPlease'
```