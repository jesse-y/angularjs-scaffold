# angularjs-scaffold
A base angularjs project that can be used for rapid prototyping or as the seed for your next angularjs app.

The project uses Webpack as its primary build tool, Jest + Jasmine as the unit test runner and framework, along with Typescript and SASS support.

## Usage

Once cloned to your local machine, you can run

```
npm install
```

To install dev dependencies.

```
npm run build
```

Will build the project and place the output in the `dist` folder.

```
npm run start
```

Will run the development server which has Webpack's Hot Module Reloading enabled. You should be able to see your project served at `http://localhost:4200`

```
npm run test
```

Will run Jasmine tests. Coverage is enabled - you can examine the coverage report generated at `coverage/lcov-report/index.html` once the test runner completes.
