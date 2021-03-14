# Release Process

Releases should only be conducted from the 'main' branch.

## Lint

`yarn lint`

## Test

`yarn test`

## Build

`yarn build`

## Versioning

Create a new commit in which you update package.json to the new version number in accordance with [SemVer](https://semver.org/). Provide a commit message in the format "Prepare for Vx.y.z release.", where 'Vx.y.z' is the new version number.

Push to remote main.

## Publish Storybook to GHPages

The following script will publish your local main branch's stories to the GitHub Pages public StoryBook:

```bash
yarn storybook:publish
```

Publishing from other source branches is currently not supported.

## Publish to NPM

First ensure you updated the version in `package.json` according to [SemVer](https://semver.org/). NPM will reject any attempt to publish a version that has already been published. Each version must be unique.

Finally with the above taken into account, publishing to NPM is as simple as:

```bash
yarn prepare-publish
```

Check the contents of the 'dist' directory. This is what will be published in the next step. Ensure it only contains '.js' and '.d.ts' files. There should be no story or test files.

```bash
yarn login
yarn publish dist
```

Create a new local tag:

`git tag Vx.y.z`

Push the tag up to the remote:

`git push origin Vx.y.z`

All done. Pat yourself on the back. You did good.
