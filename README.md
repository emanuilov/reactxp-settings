# Overview
Basic settings, linting and scripts, so you can start developing with ReactXP in VSCode straight away.
The ESLint is set to test JavaScript only.

# Prerequisites
1. [VS Code](https://code.visualstudio.com/download)
2. VSCode extension - [Flow Language Support](https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode)
3. [NPM](https://nodejs.org/en/) & `npm install -g yarn`
4. `npm install -g create-rx-app cross-env`
5. (Optional) Android SDK
6. (Optional) Windows 10 SDK
7. (Optional) iOS SDK

# Creating a new project
1. `create-rx-app newprojectname --javascript`
2. Start the android app via yarn start:android
    - If it starts delete /react-fix and ./gitmodules
    - If it doesn't(an error appears):
        1. Run `git submodule init; git submodule update` in this project
        2. copy /react-fix/android to the main directory of your new project

# Applying the new settings
#### Do this in the new project's directory
1. Remove all the files(files only, without the folders)
2. Copy the contents of this file's directory to the new project's directory
3. Delete /jest
4. Run `npm install` to update everything

# Changing the app's name
#### If you need to have a space or a symbol in the name you have to change the app's display name in:
```
/android/app/src/main/res/values/strings.xml
/ios/<project>/Info.plist - CFBundleDisplayName
/ios/<project>/Base.lproj/LaunchScreen.xib
/web/template.html - title
/windows/<project>/Package.appxmanifest - everywhere except EntryPoint
/windows/<project>/Properties/AssemblyInfo.cs
```

# Changing the location of the entry file
Replace `index` or `index.js` with the new location
```
/package.json
/android/app/src/main/java/com/<project>/MainApplication.java
/ios/<project>/AppDelegate.m
/windows/<project>/MainReactNativeHost.cs
/web/index.hmr.js
```

# Setup in VS Code
1. Disable the `@builtin TypeScript and JavaScript` extension for the workspace
2. Install ESLint
3. Install React Native Tools
4. If you have eslint installed globally you should remove it

# Relsease Building
## Android
1. Generate a keystore file via:
```
cd ./android/app; keytool -genkey -v -keystore <name>.keystore -alias <alias> -keyalg RSA -keysize 2048 -validity 10000
```
## You should have a backup of this keystore, because its being ignored by git for security reasons
1. Add these variables in <root-dir>/android/gradle.properties with the correct data:
```
RELEASE_STORE_FILE=name.keystore
RELEASE_KEY_ALIAS=alias
RELEASE_STORE_PASSWORD=password
RELEASE_KEY_PASSWORD=password
```
3. Run yarn build:android in the terminal

# Installing the release version
1. Android - `yarn install:android`
2. iOS - `?`

# Emulators
1. Android
   - If you would like to use the `yarn emulator:android` command you need to have previously created an AVD with name Nexus

# Cleaning
1. Android - `yarn clean:android`
2. iOS - `?`