# Getting Started with Your React App

This guide will help you set up a basic React app using Create React App and add some essential configurations and files.

## Prerequisites

Before you begin, make sure you have the following installed:

- Node.js (Version 18.17.0 or higher)
- npm (Node Package Manager)

## Installation

1. Check your Node.js and npm versions:

   ```sh
   node -v
   npm -v
   ```

2. Use the specified Node.js version:

   ```sh
   nvm use v18.17.0
   ```

3. Create a new React app named "pd-tech-services":

   ```sh
   npx create-react-app pd-tech-services
   ```

4. Navigate to the app directory:

   ```sh
   cd pd-tech-services
   ```

5. Start the development server:

   ```sh
   npm start
   ```

## Configuration Files

### jsconfig.json

Create a `jsconfig.json` file at the root of your project with the following content:

```json
{
  "compilerOptions": {
    "baseUrl": "./src",
    "checkJs": true,
    "jsx": "react-jsx"
  }
}
```

### .gitignore

Create a `.gitignore` file at the root of your project with the following content:

```sh
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

## Entry Point: index.js

Create an `index.js` file with the following content:

```js
import App from "components/App";
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## App Component: App.js

Create an `App.js` file inside the `/src/components` directory:

```js
import 'assets/css/base.css';
import { HomePage } from "pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" Component={HomePage} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
```

## Adding React Router

To use React Router, install the `react-router-dom` package:

```sh
npm install react-router-dom
```

## Styling: base.css

Create a `base.css` file inside `/src/assets/css` with the following content:

```css
html, body {
  margin: 0;
  padding: 0;
}
```

## Home Page: HomePage.js

Create a `HomePage.js` file inside the `/src/pages` directory:

```js
export function HomePage() {
  return (
    <h1>Hello world</h1>
  );
}
```

Now you have a basic React app with routing and styling! Customize and build upon this foundation to create your desired application.

