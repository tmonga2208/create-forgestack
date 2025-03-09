import fs from "fs-extra";
import path from "path";
import chalk from "chalk";
import { execSync } from "child_process";
import { promptOptions } from "./prompts.js";
import { fileURLToPath } from "url";

export async function createProject(projectName: string) {
  const projectPath = path.join(process.cwd(), projectName);
  const __dirname = path.dirname(fileURLToPath(import.meta.url)); // Ensure compatibility

  console.log(chalk.green(`\n🚀 Creating project: ${projectName}...\n`));

  // Path to the template directory
  const templatePath = path.join(__dirname, "../src/template");

  if (!fs.existsSync(templatePath)) {
    console.error(chalk.red("❌ Template folder not found!"));
    process.exit(1);
  }

  // Copy the template files
  fs.copySync(templatePath, projectPath);

  // Navigate to the project and install dependencies
  process.chdir(projectPath);
  console.log(chalk.blue("\n📦 Installing dependencies...\n"));
  execSync("npm install", { stdio: "inherit" });

  // Prompt for Firebase config
  await promptOptions();

  console.log(chalk.green("\n✅ Project setup complete! Run the following:\n"));
  console.log(chalk.yellow(`   cd ${projectName}`));
  console.log(chalk.yellow(`   npm run dev`));
}
