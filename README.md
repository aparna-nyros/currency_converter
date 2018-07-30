# Currency Converter

A react native app to convert currency for both Android and IOS.Theme of the application is to know the currency values of all countries. And also we know the currency difference between different countries.
Using this app we can change the color of overall app through themes section in options screen.

## Getting Started

### Prerequisites
1. Install [node](https://nodejs.org/en/download/)
2. Install [xcode](https://developer.apple.com/xcode/) or [Android SDK](https://developer.android.com/studio/index.html)


### Installation
$ npm install -g react-native-cli

### Creating an App
```
$ react-native init my-app
$ cd my-app
```
### Covered Topics
1. Building Components
2. Navigation
3. Redux
4. Redux saga and HTTP requests

#### Runs your app in development mode.

##### IOS
To run the app on ios, open Simulator or conenct your phone and run `react-native run-ios`

##### Android
To run the app on android connect your phone or start the android emulator and run `react-native run-android`. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup). We also recommend installing Genymotion as your Android emulator. Once you've finished setting up the native build environment, there are two options for making the right copy of `adb` available to Create React Native App:

##### Using Android Studio's `adb`

1. Make sure that you can run adb from your terminal.
2. Open Genymotion and navigate to `Settings -> ADB`. Select “Use custom Android SDK tools” and update with your [Android SDK directory](https://stackoverflow.com/questions/25176594/android-sdk-location).

##### Using Genymotion's `adb`

1. Find Genymotion’s copy of adb. On macOS for example, this is normally `/Applications/Genymotion.app/Contents/MacOS/tools/`.
2. Add the Genymotion tools directory to your path (instructions for [Mac](http://osxdaily.com/2014/08/14/add-new-path-to-path-command-line/), [Linux](http://www.computerhope.com/issues/ch001647.htm), and [Windows](https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/)).
3. Make sure that you can run adb from your terminal.
