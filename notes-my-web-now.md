Youtube setup Sass in React App:
https://www.youtube.com/watch?v=2QaI5ajg4Hw
1. npx create-react-app my-app
2. cd my-app
3. npm start
4. npm install node-sass -g
5. package.json - "scripts" replace with:
"scripts": {
  "build-css": "node-sass --include-path ./src --include-path ./node_modules src/ -o src/",
  "match-css": "npm run build-css && node-sass --include-path ./src --include-path ./node_modules src/ -o src/ --watch --recursive",
  "start-js": "react-scripts start",
  "start": "npm-run-all -p watch-css start-js",
  "build": "npm run build-css && react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
}
6. npm install --save npm-run-all
7. create App.scss file
8. in App.js file, import './App.min.css'; instead of import './App.css';
