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
