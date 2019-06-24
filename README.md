# webpack-conditional-loader-react

<div>
  <a href="https://www.npmjs.com/package/webpack-conditional-loader-react"><img src="https://img.shields.io/npm/v/webpack-conditional-loader-react.svg" /></a>
</div>

<br>

Inspired by and modified from [webpack-conditional-loader](https://github.com/caiogondim/webpack-conditional-loader) to work with react and the block comments used within JSX,
conditional loader decides if a given block should be included in the final bundle.

Useful for removing instrumentation code and making your final production bundle smaller (therefore
faster).

## Installation

```
yarn add webpack-conditional-loader-react

or

npm install --save-dev webpack-conditional-loader-react
```

## Usage

### In your `webpack.config.js`

Put `webpack-conditional-loader-react` as the last loader in the array, so it will process the code before
all others.

```js
module: {
  rules: [{
    test: /\.js$/,
    use: ['babel-loader', 'webpack-conditional-loader-react']
  }]
}
```

Get an example config file [here](https://github.com/RemeJuan/webpack-conditional-loader-react/blob/master/webpack.js)

### On your code

Use `{/*#if expression*/}` and `{/*#endif*/}` to wrap blocks of code you want to be removed if a given
predicate is false.

```jsx
    <Fragment>
        Dashboard Component.
        {/*#if process.NODE_ENV === 'development'*/}
        <p>I am here for development purposes only</p>
        {/*#endif*/}
        {/*#if process.NODE_ENV !== 'development'*/}
        <p>I am here for everyones purposes</p>
        {/*#endif*/}
    </Fragment>
```

In the example above, the code will be removed if the enviroment variable `NODE_ENV` is not
`develpment`, removing unnecessary code from your production bundle.

The same technique can be used to prevent loading packages in the production bundle.


## Credits
- [webpack-conditional-loader](https://github.com/caiogondim/webpack-conditional-loader)

---

[Reme Le Hane](https://remelehaen.me) &nbsp;&middot;&nbsp;
GitHub [RemeJuan](https://github.com/RemeJuan) &nbsp;&middot;&nbsp;
Twitter [@RemeJuan](https://twitter.com/RemeJuan)