#!/usr/bin/env node

import program from 'commander';
//console.log(process.argv);

program
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0', '-v, --version', 'output the version number')
  .helpOption('-h, --help', 'output usage information');

program.parse(process.argv);
