const yargs = require("yargs");
const chalk = require("chalk");
const {hideBin} = require("yargs/helpers");

const city = yargs(hideBin(process.argv)).option("city", {
  alias: "c",
  type: "string",
  description: "name of city",
  demandOption: true,
}).parse();


// console.log("Your city chosen is " + city.city)

function printHeader() {
  console.log(
    chalk.yellow.bold(`============Daily Weather updates=============`),
  );
  console.log(
    chalk.green.bold(`**************${city.city.toUpperCase()}*****************`),
  );
}


switch (city.city) {
  case "St.louis":
    printHeader();
    console.log(chalk.cyan(`Temperature: `) + chalk.white(`85°F`));
    console.log(chalk.yellow(`Condition: `) + chalk.white(`Cloudy`));
    console.log(chalk.blue(`Feels like: `) + chalk.white(`90°F`));
    console.log(chalk.green(`Humidity: `) + chalk.white(`67%`));
    console.log(chalk.magentaBright(`UV: `) + chalk.white(`Weak`));
    console.log(chalk.gray(`Visibility: `) + chalk.white(`30km`));
    console.log(chalk.cyanBright(`Warning: `) + chalk.white(`Flood watch`));
    break;

  case "chicago":
    printHeader();
    console.log(chalk.cyan(`Temperature: `) + chalk.white(`45°F`));
    console.log(chalk.yellow(`Condition: `) + chalk.white(`light snow`));
    console.log(chalk.blue(`Feels like: `) + chalk.white(`30°F`));
    console.log(chalk.green(`Humidity: `) + chalk.white(`60%`));
    console.log(chalk.magentaBright(`UV: `) + chalk.white(`Weak`));
    console.log(chalk.gray(`Visibility: `) + chalk.white(`15km`));
    console.log(chalk.cyanBright(`Warning: `) + chalk.white(`None`));
    break;

  case "new york":
    printHeader();
    console.log(chalk.cyan(`Temperature: `) + chalk.white(`75°F`));
    console.log(chalk.yellow(`Condition: `) + chalk.white(`Drizzling`));
    console.log(chalk.blue(`Feels like: `) + chalk.white(`70°F`));
    console.log(chalk.green(`Humidity: `) + chalk.white(`61%`));
    console.log(chalk.magentaBright(`UV: `) + chalk.white(`Weak`));
    console.log(chalk.gray(`Visibility: `) + chalk.white(`28km`));
    console.log(
      chalk.cyanBright(`Warning: `) + chalk.white(`Expected Heavy rain`),
    );
    break;

  default:
    console.log(
      chalk.bgRedBright(
        `Can't find udpates for entered city ${city}. Please try again with different city.`,
      ),
    );
    break;
}