# Awesome Weather

This is react native project about clone UI from https://dribbble.com/shots/5470987-cliMate-Minimal-Weather-app/attachments/10886922?mode=media

## Prerequisites

- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 12](https://developer.apple.com/xcode)
- [Cocoapods 1.10.1](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

### Usage 

Step to running the project:

- Go to your project's root folder and run `npm install`.
- If you are using Xcode 12.5 or higher got to /ios and execute `pod install --`repo-update`
- Run `npx react-native start` to start your application!

## Fetch data from server

Step to running node js server:

- All data is setup in `serverData.js`
- Run `node serverData.js`
- Server running at http://127.0.0.1:3000/
- if still failed to fetch in android, should run `adb reverse tcp:3000 tcp:3000` as port forwarding


## Folder structure

This template follows a very simple project structure:

- `src`: This folder is the main container of all the code inside your application.
  - `hooks`: Folder to store any hooks function that you use through your app using `use...` prefix.
  - `util`: Folder to store any common function that you use through your app.
  - `images`: Asset folder to all images.
  - `components`: Folder to store any common component that you use through your app (such as a generic button)
  - `screens`: Folder that contains all your application screens/features.
    - `Screen`: Each screen should be stored inside its folder and inside it a file for its code.
      - `Home.js`
      - `MenuDrawer.js`
