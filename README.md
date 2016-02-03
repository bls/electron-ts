# electron-ts

Hello World, Electron TypeScript. 

Build Environment
=================

* Build is via grunt
* Typescript target is ES6; can use the ES6 features of node.js 5.1.1.
* Tests are using mocha (https://mochajs.org/)

Setup
=====

Install grunt-cli: `npm install -g grunt-cli`

Commands
========

* Compile: `npm run build`
* Run: `npm start`
* Test: `npm test`

Notes
=====

You will see a warning like:

```
npm WARN deprecated lodash@0.9.2: lodash@<2.0.0 is no longer maintained. Upgrade to lodash@^3.0.0
```

During npm install; you can ignore that it's due to the stable version of grunt depending on an
old library.

Thanks
======

* https://github.com/szwacz/electron-boilerplate
* https://github.com/WanderWang/electron-typescript-boilerplate
