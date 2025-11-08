# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

    ```bash
    npm install
    ```

2. Start the app

    ```bash
    npx expo start
    ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

# Common instructions

## 📘 Naming Conventions

### Folders

> **camelCase** for component folders → `form/, cards/`

> **camelCase** for util and hook folders → `utils/, hooks/`

> **snake_case** or **kebab-case** only for public assets → `images/icons/, profile-pic.png`

### Files

| Type           | Convention                                      | Example                             |
| -------------- | ----------------------------------------------- | ----------------------------------- |
| Components     | `PascalCase`                                    | `UserCard.tsx`                      |
| Screens        | `PascalCase` with “Screen” suffix               | `LoginScreen.tsx`                   |
| Hooks          | `camelCase` starting with `use`                 | `useAuth.ts`                        |
| Contexts       | `PascalCase`                                    | `AuthContext.tsx`                   |
| Services / API | `camelCase` + `.service.ts`                     | `user.service.ts`                   |
| Styles         | same as file + `.styles.ts`                     | `HomeScreen.styles.ts`              |
| Utilities      | `camelCase`                                     | `formatDate.ts`                     |
| Constants      | `UPPER_SNAKE_CASE` inside `constants/colors.ts` | `PRIMARY_COLOR = "#007AFF"`         |
| Types          | `PascalCase` + `.types.ts`                      | `User.types.ts`                     |
| Navigation     | `PascalCase`                                    | `AppNavigator.tsx`, `RootStack.tsx` |
| Test files     | `<Component>.test.tsx`                          | `Button.test.tsx`                   |

### General Rules

- State variables: camelCase

- Files and folders: match main export (e.g., Button/Button.tsx)

- Avoid platform suffix unless needed (HomeScreen.ios.tsx, HomeScreen.android.tsx)

- Constants: all uppercase

> export const API_URL = "https://api.example.com";

- Enums: PascalCase

> enum ThemeMode { Light, Dark }

# Steps

### Basic setup

- Created the project with yarn as package manager

```bash
 yarn create expo-app
```

Currently using Expo **SDK 54** (current version), which has **New Architecture** is enabled by default in 54.

- Created an authContext to store basic App user detials `useAuthContext`

### react-native-safe-area-context

```bash
yarn add react-native-safe-area-context
```

**Issue** : Start of the content is behiden the status bar.

- This package is useful to maintain the View(UI) safe on status bar, navigation bar, notches.
- Need to add `SafeAreaProvider` on RootView on App folder.
- Then, Add `SafeAreaView` to all the screens

### Prettier setup

```bash
yarn add -D prettier @trivago/prettier-plugin-sort-imports
```

- Prettier → formats code (indentation, spacing, quotes, etc.).
- Trivago plugin → adds import sorting ability to Prettier.
- `@trivago/prettier-plugin-sort-imports `, It auto-sorts your import statements during Prettier formatting and prettier package is required to work. trivago is not standalone package.
