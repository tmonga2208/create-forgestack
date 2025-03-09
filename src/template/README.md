# ForgeStack Template

ForgeStack is a full-stack Next.js template powered by Firebase. It provides an opinionated setup with Firebase Realtime Database, Firebase Auth, and Firebase Storage, making it easy to start building production-ready applications.

## Features

- **Next.js** for server-side rendering and static generation
- **Firebase Realtime Database** for real-time data sync
- **Firebase Auth** for authentication
- **Firebase Storage** for file uploads
- **Tailwind CSS** for styling
- **ShadCN UI** for modern UI components
- **Dark Mode** support
- **Custom Hooks** for Firebase interactions

## Installation

To create a new project using this template, run:

```sh
npx create-forgestack my-app
cd my-app
npm install
npm run dev
```

## Project Structure

```
my-app/
├── components/          # Reusable UI components
├── hooks/              # Custom hooks for Firebase
├── lib/                # Utility functions
├── pages/              # Next.js pages
├── public/             # Static assets
├── styles/             # Global styles
└── .env.local          # Environment variables
```

## Custom Hooks

ForgeStack provides the following Firebase custom hooks:

- `useAuth.ts` - Firebase authentication functions
- `useDatabase.ts` - Firestore database interactions
- `useRealtimeDB.ts` - Realtime Database interactions
- `useStorage.ts` - Firebase Storage file management

## Environment Variables

Create a `.env.local` file and add your Firebase configuration:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## Running the Project

After installing dependencies, start the development server:

```sh
npm run dev
```

## Deployment

To deploy your ForgeStack project, use Vercel:

```sh
npm run build
vercel deploy
```

## License

This project is licensed under the MIT License.
