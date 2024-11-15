# React SDK sample Implementation in Expo React Native
This is a POC on how to install and use [Optimizely React SDK](https://github.com/optimizely/react-sdk) with [Expo](https://docs.expo.dev/). 

**This POC is based on Expo SDK 50**. Setup might differ from version to version.
If you face any trouble setting up the SDK, please create an issue under the [Optimizely React SDK issue](https://github.com/optimizely/react-sdk/issues)

## Env
Create a `.env.local` file. Put you SDK key

```bash
EXPO_PUBLIC_OPTIMIZELY_SDK_KEY="<YOUR_SDK_KEY>"
```
[More on Expo env variable](https://docs.expo.dev/guides/environment-variables/)

## Installation 
[Check out Optimizely React native official installation guide](https://docs.developers.optimizely.com/feature-experimentation/docs/install-sdk-reactnative)


All the necessary dependencies have been installed and included in this project. To install required dependencies, run -  

```bash
npm install
```

### Installation in existing project
For exising app, do followings. 

Install `@optimizely/react-sdk`.
```bash
npm install --save @optimizely/react-sdk
```

Install peer dependencies as well - 

```bash
npm install --save @react-native-async-storage/async-storage @react-native-community/netinfo react-native-get-random-values fast-text-encoding
```

- `@react-native-async-storage/async-storage` is required to:
	- Enable datafile caching by storing the datafile on the user's device.
	- Enable event offline persistence by temporarily storing events on the user's device when offline.
- `@react-native-community/netinfo` is required to detect when internet connectivity is restored so that events triggered during the offline mode can be retried.
- `react-native-get-random-values` is required for crypto.getRandomValues() support.
- `fast-text-encoding` is required to support encoding for user bucketing.

## Build & Run
You can run the app both in Expo Go or with the help of development build.
- [More on Expo Go](https://expo.dev/go)
- [More on Expo Development Build](https://docs.expo.dev/develop/development-builds/create-a-build/)

We prefer development build. And following demonstration is on how to build and run the app in a development build - 

### Build
```bash
# Android: follow eas.json for profile config
eas build --profile development --platform android

# IOS: follow eas.json for profile config
eas build --profile development-simulator --platform ios
```

### Run 
Run following command in your project directory, and open the development build in a device - 

```bash
# Android
npm run android

# IOS
npm run ios
```

