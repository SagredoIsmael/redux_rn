
    ReactNative: Agile implementation of redux with data persistence and expiration of this persistence (Android/iOS)


## 📖 Getting started

`$ yarn add @sagredoismael/redux_rn`

or 

`$ npm i @sagredoismael/redux_rn`


## **Prerequisite if you want to use Persist data**

- **iOS**

> **iOS Prerequisite:** Please make sure `CocoaPods` is installed on your system

1. Enter into iOS Folder `cd ios/` (on your project's root folder).

2. Add this line to your `Podfile` just below the last pod (if you don't have one, you can create it by running `pod init`):

```diff
+ pod 'RNCAsyncStorage', :path => '../node_modules/@react-native-community/async-storage'
```

3. Run `pod install`
  
  
- **Android**

1. Add project to `android/settings.gradle`:
```diff
rootProject.name = 'MyApp'

include ':app'

+ include ':@react-native-community_async-storage'
+ project(':@react-native-community_async-storage').projectDir = new File(rootProject.projectDir, '../node_modules/@react-native-community/async-storage/android')
  ```

2. In `android/app/build.gradle` add to dependencies:
```diff
dependencies {
  ...
+ implementation project(':@react-native-community_async-storage')
}
  ```

3. Then, in `MainApplication.java`:
```diff
package com.myapp;

+ import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;

...

@Override
protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
        new MainReactPackage(),
+       ReactPackage asyncstorage = new AsyncStoragePackage();
 +         packages.add(asyncstorage);
    );
}
```


## 💻 Basic usage

```
import { ReduxWrapper } from '@sagredoismael/redux_rn'

const App = () => (
  <ReduxWrapper App={YouFirstComponentInApp}
  />
)
```


## 💻 With reducers usage

```
import { ReduxWrapper } from '@sagredoismael/redux_rn'

const exampleReducer = (state = {}, action) => {
  switch (action.type) {
      default:
          return state
  }
}

const App = () => (
  <ReduxWrapper App={YouFirstComponentInApp}
   reducers= {{exampleReducer}}
  />
)
```


## 💻 Complete Usage (with persist)

```
import { ReduxWrapper } from '@sagredoismael/redux_rn'

const examplePersist = {
  whitelist: [
    'lastSession'
  ],
  blacklist: [],
  expired: [
    {
      name: 'lastSession',
      expireSeconds: 54000,
      expiredState: {} //initialState,
      autoExpire: true
    }
  ]
}

const exampleReducer = (state = {}, action) => {
  switch (action.type) {
      default:
          return state
  }
}

const App = () => (
  <ReduxWrapper 
   appComponent={YouFirstComponentInApp}
   reducers= {{exampleReducer}}
   settingsPersist={examplePersist}
  />
)
```


## 💡 Props

- **General(iOS & Android)**

| Prop                   | Type                | Mandatory | Note                                             |
| ---------------------- | ------------------- | ------- | ------------------------------------------------ |
| `appComponent`     | `react component`            |   YES      | Specify a react component for initialize your App |
| `reducers`                | `object`            |    NO     | Specify all reducers you want into combineReducers
| `settingsPersist`          | `object`            |    NO     | Specify all persist config (whiteList, blackList && expired. **If you don't want time expired, is not necessary this props)    |


## ✨ Credits
https://github.com/facebook/react
https://github.com/reduxjs/react-redux
https://github.com/reduxjs/redux
https://github.com/rt2zz/redux-persist
https://github.com/reduxjs/redux-thunk
https://github.com/LogRocket/redux-logger
https://github.com/kamranahmedse/redux-persist-expire
https://github.com/react-native-community/async-storage
https://github.com/react-native-community/async-storage/blob/LEGACY/docs/Linking.md

## 🤔 How to contribute
Have an idea? Found a bug? Please you can write me and I get you permission to the repo!
## 💫 Where is this library used?
If you are using this library in one of your projects, add it in this list below. ✨


## 📜 License
MIT license
