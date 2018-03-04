## YouTube search

A simple and fast `YouTube` search engine written in `React` and `Redux`, styled with `Material UI`. It allows to search and fetch a query of `YouTube` videos and run them. Very similar to how `YouTube` looks and feels.

### Getting Started
You may use both `npm` or `yarn` to set it up and run. Instructions below are for `yarn`. Tested with `Node 9.5.0`.

Clone repository with:

```
git clone https://github.com/bmind12/full-stack-js.git youtube-search
```

Go to repository and install required packages:
```
cd youtube-search
yarn install
```

Run the app locally:
```
yarn start
```

### Error:

There is `Incorrect error message when a Secure Page's X-XSS-Protection Report URI is cross-origin error` appears - it's a specific [Chromium bug](https://bugs.chromium.org/p/chromium/issues/detail?id=807304).
