import chalk from "chalk";
export function introText() {
    console.log(chalk.bold.cyan("\n ForgeStack CLI \n"));
    console.log(chalk.yellow("Scaffolding your Firebase + Next.js project...\n"));
}
