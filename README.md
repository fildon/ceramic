# Ceramic Components

A reusable React component library.

Try out the components right now at the [Ceramic Components StoryBook](https://fildon.github.io/ceramic/).

Or you can view the source at the [Ceramic Homepage](https://github.com/fildon/ceramic).

## Usage

Using Ceramic couldn't be simpler. Just add `ceramic-components` as a dependency to your project:

```bash
yarn add ceramic-components
```

Or if you prefer NPM

```bash
npm install ceramic-components
```

Then wherever you would like to use a Ceramic component, for example:

```js
import { Join } from "ceramic-components";
```

Since Ceramic was built in TypeScript, type declaration files are included. Thanks to this Ceramic works seamlessly in either JavaScript or TypeScript projects.

## Development

Just install the project dependencies:

```bash
yarn install
```

Then to run the StoryBook locally:

```bash
yarn storybook:local
```

A StoryBook should appear, displaying all the current stories. This script supports hot module reloading, so feel free to change a component and see its stories update right away.

## Linting

Linting is provided by ESLint and a handful of plugins. Additionally we recommend using [Prettier](https://prettier.io/).

You can run the linter with:

```bash
yarn lint
```

## Testing

Testing is provided by [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

You can run the tests with:

```bash
yarn test
```

Or if you also want test coverage analysis:

```bash
yarn test:coverage
```

## Publishing to GHPages

The following script will publish your local main branch's stories to the GitHub Pages public StoryBook:

```bash
yarn storybook:publish
```

Publishing from other source branches is currently not supported.

## Publishing to NPM

First ensure you updated the version in `package.json` according to [SemVer](https://semver.org/). NPM will reject any attempt to publish a version that has already been published. Each version must be unique.

Finally with the above taken into account, publishing to NPM is as simple as:

```bash
yarn authenticate
yarn prepare
yarn publish dist
```

### Advanced build details

Although this is a TypeScript project, we wanted to publish commonjs modules. To do this we publish only the build output directory. However for this to be a valid NPM package it must include a `package.json`. This presents a dialemma. Either we could emit the build artifacts directly to the root directory and package the root, or we could copy the package.json to the build output folder. We have opted for the latter since it helps to maintain a better distinction between the `package.json` as used by developers vs the `package.json` as used by the NPM registry. The script `prepare-publish.js` performs a copy from one to the other, making some minor edits in the process.
