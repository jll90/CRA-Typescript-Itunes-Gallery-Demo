This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) with the option --typescript enabled
as there is official support for typescript starting with version 2.1.

## What does this app do 

Upon running the application the app fetches some data from the following url <https://itunes.apple.com/us/rss/topalbums/limit=100/json>.
It then presents the data to the user. The user has the option to filter by category, by clicking on the menu to the left.
The dimensions (width and height) of the main component are fixed because it followed a layout requirement.

This showcases how to use Typescript interfaces, both using state and props.

Types for what the API returns can be found in the files `index.d.ts` inside the `types` directory.

This project also leverages `node-sass` which can be installed by running `yarn add node-sass` from the command line.
An alternative to this approach is to use `styled-components` which supports both SCSS syntax.

To keep the project as lean and clean as possible, the API call is done with fetch and only the bootstrap styles were installed (not the react-bootstrap library).

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
