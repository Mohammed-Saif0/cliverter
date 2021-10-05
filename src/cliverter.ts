import figlet from 'figlet';

import { inchToCm } from './converters/length';

class Command {
	name: string;
	description: string;
	constructor(name: string, description: string) {
		this.name = name;
		this.description = description;
	}
}

const supportedCommands: Command[] = [
	new Command('inch-cm', 'Convert inch to centimeters'),
];

const helpMessage = () => {
	const cliverterFiglet = figlet.textSync('Cliverter', {
		font: 'Standard',
		horizontalLayout: 'full',
	});
	const helpText = `${cliverterFiglet}\n\nCliverter is a converter app in a command-line.\nusage: cliverter <command>`;
	console.log(helpText);
};

const errorMessage = () => {
	console.log(`Unrecognized command. See 'cliverter --help'`);
};

const args: string[] = process.argv; // Command line arguments
const inputArgs: string[] = args.slice(2); // Remove first two arguments

if (inputArgs.length === 0) {
	helpMessage();
} else if (inputArgs.length > 2) {
	console.log(`Error: Received ${inputArgs.length} arguments but expected 1`);
} else {
	switch (inputArgs[0]) {
		case '--help':
			helpMessage();
			break;
		case 'inch-cm':
			inchToCm(inputArgs[1]);
			break;
		default:
			errorMessage();
	}
}
