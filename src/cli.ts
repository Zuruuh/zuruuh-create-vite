#!/usr/bin/env node

import { resolve } from 'path';
import { create } from 'create-create-app';
import type { AfterHookOptions } from 'create-create-app';

const templateRoot = resolve(__dirname, '..', 'templates');

const caveat = (options: AfterHookOptions) => `
Your app was successfully created!
cd ${options.packageDir};
git init
`;

// See https://github.com/uetchy/create-create-app/blob/master/README.md for other options.

create('create-vite', {
  templateRoot,
  defaultAuthor: 'Younès Ziadi',
  defaultLicense: 'MIT',
  defaultEmail: 'ziadi.mail.pro@gmail.com',
  defaultDescription: 'Vite App',
  defaultTemplate: 'default',
  defaultPackageManager: 'pnpm',
  promptForDescription: false,
  promptForAuthor: false,
  promptForTemplate: false,
  promptForPackageManager: false,
  promptForEmail: false,
  promptForLicense: false,
  skipGitInit: true,

  caveat,
}).catch(console.error);
