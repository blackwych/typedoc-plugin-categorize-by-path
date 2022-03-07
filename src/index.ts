import { Application, ParameterType } from 'typedoc';

import Plugin from './Plugin';

const registerOptions = (app: Application) => {
  app.options.addDeclaration({
    name: 'categoryPatterns',
    help: 'RegExp pattern strings that capture category and module names from module paths.'
        + ' Each pattern must contain named capture groups (?<category>...) and (?<module>...)',
    type: ParameterType.Array,
    defaultValue: [],
  });
};

const load = (app: Application) => {
  registerOptions(app);
  new Plugin(app).initialize();
};

export { load }; // eslint-disable-line import/prefer-default-export
