#!/usr/bin/env node

import program from 'commander';

program
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0', '-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    console.log(filepath1);
    console.log(filepath2);
  });

program.parse(process.argv);
