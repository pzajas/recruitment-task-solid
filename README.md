# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Clone the repository.

   ```bash
   git clone https://github.com/pzajas/recruitment-task-solid.git
   cd favorite-colors-app
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## Features

Add/Remove Favorite Colors: Users can add or remove colors to/from their favorite list.

Persistent Favorites: The list of favorite colors is stored persistently across app restarts using AsyncStorage.

Toast Notifications: Displays feedback messages when a color is added, removed, or already exists in favorites.

Validation: Prevents adding duplicate colors to the favorites list.

State Management with Jotai: Uses Jotai for managing the app's state.

UI Feedback: Provides immediate toast notifications for user actions.

Get Random Color on Screen Press: Displays a random color when the screen is pressed.


## Usage
Random Color: Press the screen to generate a random color and display it.

Add a Color: Tap the button to add a color to your favorite list.

Remove a Color: Long press the color in your favorite list to remove it.

Toast Notifications: Toast messages will inform you when actions are completed or if there are issues (e.g., adding a duplicate color).

## Technologies Used

React Native: For building the mobile app.

Expo: For an easy setup and development environment.

Jotai: For state management.

AsyncStorage: For persistent storage of user data.

React Native Toast Message: For showing toast notifications.

TypeScript: For type safety and development efficiency.

Expo Vector Icons: For integrating a rich set of icons in the app.

Prettier: For code formatting and maintaining consistent code style.

ESLint: For linting and ensuring code quality and best practices.

## License
This project is licensed under the MIT License – see the LICENSE file for details.
