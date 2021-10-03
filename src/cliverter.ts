#!/usr/bin/env node

const figlet = require('figlet');

const args: string[] = process.argv; // Command line arguments
const inputArgs: string[] = args.slice(2); // Remove first two arguments

const printHelpMessage = () => {
  const cliverterFiglet = figlet.textSync('Cliverter', {
    font: 'Standard',
    horizontalLayout: 'full',
  });
  const helpText = `${cliverterFiglet}

    Cliverter is a converter app in a command-line.

    usage:
      cliverter <command>
  `
  console.log(helpText)
}

if(inputArgs.length == 0){
  printHelpMessage()
}