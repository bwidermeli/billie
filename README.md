# Billie's Challenge

¿What does it have?
 - SSR
 - HMR (React + SCSS files)
 - Isomorphic Code
 - Adaptive Design (This way it is more performant by not adding the desktop styles on mobile or mobile ones on desktop)


This works using Isomorphic code between server and client side. HMR applies to React Components and **SCSS** files.

### App Structure

This folder contains the application, inside you will find:

- client: This is the entry point for webpack
- pages: This folder needs to have the next structure
    - page-name (This is the one that is going to be render automatically by the SSR)
        - styles (This is the styles folder)
            - index.scss (Main Styles for the page) - Non Adaptive
        - index.js (Page that is going to be render with ReactDOM)
        
If you want to use adaptive mode, you need to create two different styles files inside `styles` folder

- index.desktop.scss
- index.mobile.scss

Depending on the device that enters the page, it will serve `desktop` or `mobile` css automatically.

## Run the project

If you want to develop, just:

```bash
npm i
npm run start-dev
```

Then access to [http://localhost:3000/](http://localhost:3000/)

## Scripts + Production

If you want to deploy the application to production, you need to build the application and the star the application

```bash
npm run-script build
npm start
```

## Run Tests & Coverage

To run the Unit Tests you just need to run the next command:

```bash
npm run test
```

## Author

Brian Wider (This is based on a boilerplate that has been developed along with a friend and can be used for small project or even production ones)

**There is also a way to use responsive design instead of adaptive, the boilerplate that we created is already prepared for that by only setting false to the adaptive attribute value the config/default.json file. For this challenge I used adaptive as it is better for performance.**