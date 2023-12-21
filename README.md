# @ae_utbm/core

Repository that contains all typings & constants variables used across all projects of the AE UTBM.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install @ae_utbm/core.

```bash
npm install @ae_utbm/core
```

Once installed, modify your `tsconfig.json` file to add the following lines:

```jsonc
{
  "compilerOptions": {
    // ...
    "typeRoots": ["node_modules/@ae_utbm/core/types"]
    // ...
  },
  "include": ["node_modules/@ae_utbm/core/types/**/*"]
}
```

As we are overriding the default `lib`s types of TypeScript, you should also add the following lines to your `package.json` file:

```jsonc
{
  "dependencies": {
    // ...
    "@typescript/lib-dom": "npm:@ae_utbm/core",
    "@typescript/lib-es2015": "npm:@ae_utbm/core",
    "@typescript/lib-es5": "npm:@ae_utbm/core",
    // ...
  }
}
```
