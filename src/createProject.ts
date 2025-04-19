import fs from "fs-extra";
import path from "path";
import chalk from "chalk";
import download from "download";

export async function createProject(projectName: string) {
  const projectPath = path.join(process.cwd(), projectName);
  const repoUrl = "https://github.com/tmonga2208/create-forgestack";
  const templateUrl = `${repoUrl}/archive/main.zip`;

  console.log(chalk.green(`\n🚀 Creating project: ${projectName}...\n`));

  try {
    console.log(chalk.blue("\n📥 Downloading template...\n"));

    // Download and extract only the `src/template` folder
    await download(templateUrl, projectPath, { extract: true });

    // Move the extracted `src/template` to project root
    const extractedFolder = path.join(projectPath, "create-forgestack-main", "src", "template");
    fs.copySync(extractedFolder, projectPath);

    fs.removeSync(path.join(projectPath, "create-forgestack-main"));

    console.log(chalk.green("\n✅ Project setup complete! Run the following:\n"));
    console.log(chalk.yellow(`   cd ${projectName}`));
    console.log(chalk.yellow(`   npm install`));
    console.log(chalk.yellow(`   npm run dev`));
  } catch (error) {
    console.error(chalk.red("❌ Failed to download the template!"), error);
    process.exit(1);
  }
}
