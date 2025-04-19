import { Command } from "commander";
import { createProject } from "./createProject.js";
import { introText } from "./utils.js";
const program = new Command();
program
    .name("create-forgestack")
    .version("1.2.3")
    .description("CLI to generate a Next.js + Firebase project")
    .argument("<project-name>", "Name of the new project")
    .action(async (projectName) => {
    introText();
    await createProject(projectName);
});
export default program;
