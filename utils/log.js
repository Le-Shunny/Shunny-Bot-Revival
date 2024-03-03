const chalk = require('chalk');
module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#FF00FF").bold('[ kurumi ] » ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#ff0000").bold('[ kurumi ] »') + data);
     break;
		default:			        
                        console.log(chalk.bold.hex("#00BFFF").bold(`${option} » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#00FFFF").bold('[ FileName (kurumiproject) ] » ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#ff0000").bold('[ kurumi (cypruspro21k) ] » ') + data);
			break;
		default:
			console.log(chalk.bold.hex("#00FFFF").bold(`[ kurumi (cypruspro21k) ] » `) + data);
			break;
	}
	}