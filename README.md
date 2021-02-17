# TS Project Boilerplate

This is a repo which can be used to quickly get a typescript project off the ground, made solely for my own convenience.

## Steps

1. Download .zip
2. Extract whereever
3. Build project on top

## Features:

1.  `tsconfig.json`:

- root dir set to `./src`
- output dir set to `./dist`
- test dir `test` excluded from compilation

2.  Linting:

- `typescript-eslint` and associated plugins/dependencies used for linting
- `dist` directory (that will contain build) excluded

3.  Formatting:

- `prettier` used for formatting
- `dist` directory ignored

4.  Testing:

- `jest` with `ts-jest` used for testing
- Tests contained in `src/test` directory
- `test` dir ignored from tsc build

5.  Git hooks

- `husky` used for precommit hook to run `lint-staged`

---
