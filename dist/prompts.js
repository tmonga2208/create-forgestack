import inquirer from "inquirer";
import fs from "fs-extra";
import path from "path";
export async function promptOptions() {
    const answers = await inquirer.prompt([
        { type: "input", name: "apiKey", message: "Enter your Firebase API Key:" },
        { type: "input", name: "authDomain", message: "Enter your Firebase Auth Domain:" },
        { type: "input", name: "projectId", message: "Enter your Firebase Project ID:" },
        { type: "input", name: "storageBucket", message: "Enter your Firebase Storage Bucket:" },
        { type: "input", name: "messagingSenderId", message: "Enter your Firebase Messaging Sender ID:" },
        { type: "input", name: "appId", message: "Enter your Firebase App ID:" },
    ]);
    const envConfig = `NEXT_PUBLIC_FIREBASE_API_KEY=${answers.apiKey}
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=${answers.authDomain}
NEXT_PUBLIC_FIREBASE_PROJECT_ID=${answers.projectId}
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=${answers.storageBucket}
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=${answers.messagingSenderId}
NEXT_PUBLIC_FIREBASE_APP_ID=${answers.appId}
`;
    const envFilePath = path.join(__dirname, "..", "..", ".env");
    fs.writeFileSync(envFilePath, envConfig);
}
