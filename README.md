# React Boilerplate

This is a boilerplate for a [ReactJS](https://reactjs.org/) application. This project has the minimum configurations to develop and deploy a simple React Application, such as: running unit testing, prettier adn eslint configured and scripts to run a development server and a minified build.

## Getting Started

It's recommended to use [Yarn](https://yarnpkg.com/) as the package managemnt of this project, because of that all the script exemples are using yarn.

### Developing features

To run a developemnt server, it's needed only to run the following script:

```bash
yarn start
```

To check the lint status of the project, it's needed only to run the following script:

```bash
yarn lint
```

It's possible as well to run a automatioc fix of the lint problems, just run the `lint` script with the tag `fix`, like this:

```bash
yarn lint:fix
```

To run the unit testing, it's needed only to run the following script:

```bash
yarn test
```

To help on the testing of the application, it's possible to generate a report of the test coverage using the tag `coverage` on the `test` script, like this:

```bash
yarn test:coverage
```

After running the `coverage` script, you can check a html file that has a visual representation of how the code it's been covered. It'll be locaded on the directory `coverage/Icov-report/index.html`

## Building

To create a minifed build, it's only needed to run the following script and running the `index.html` file on the new directory created `dist`:

```bash
yarn build
```
