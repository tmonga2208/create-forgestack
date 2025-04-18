# ForgeStack

ForgeStack is a fullstack template powered by **Next.js**, **Firebase**, and **Tailwind CSS**. It helps you quickly scaffold scalable web apps with built-in theming and Firebase integration.

## Features

- Next.js (App Router)
- Firebase Auth, Realtime DB, and Storage
- Tailwind CSS with dark mode support
- Custom hooks for Firebase services
- Clean, scalable project structure

## Getting Started

Create a new project:

```bash
npx create-forgestack my-app
cd my-app
```
## Set up Firebase:

Go to the Firebase Console.

Create a project and copy the config keys.

Add them to .env.local:

env
```
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
```
Run the dev server:

bash
```
npm run dev
```

## License

This project is open-source and available under the **MIT License**.

## Contributing

Contributions are welcome! Feel free to fork the repo, submit issues, or make a pull request.

---

Built with ❤️ by the tmonga2208.
