# SWS frontend challenge

Choices I made, why I made them, and what I'd do different:

- npx create-app: quick and easy way to get something up and running. If I was going to acutally make an app
  I'd probably use something like Next.
- CSS modules: again, quick and easy. Currently use Styled Components at work, would probably use it in a real app but felt like overkill here.
- My implementation of the snowflake chart: I decided to use AI to generate an SVG of the chart then use JS to draw the shaded area for the scores. I had to manually write some parts of the SVG and as a result it's far from perfect, as is the code that acts upon it. If I was making a real app I'd write it better, if I was doing this challenge again I'd just use a library.
- Styling and design choices: It's pretty ugly. I'd make a real app much less ugly.
- Testing: Currently at work we use some Microsoft libraries to test, previously we were using Jest and Cypress. If I was to do this properly I'd write unit tests for util functions like in stocks.ts, integration tests on components, and e2e tests for user flows.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
