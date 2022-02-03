
## Introduction

The following are instructions to upgrade to new versions of software

### node.js Upgrade Level 2 dependencies and below.

Level 1 dependencies are what is in your package.json. The package-lock.json
records the entire set of dependencies loaded.

1. Change Directory `cd frontend'`
1. Delete node_modules `rm -rf node_modules`
1. Delete lock file package-lock.json
1. Reinstall `npm install`

### node.js Manual Upgrade Level 1 dependencies

1. Change directory `cd frontend`
1. Upgrade packages.json as required modifying the version numbers as per the changelogs of each package.
1. Delete node_modules `rm -rf node_modules`
1. Delete lock file package-lock.json
1. Reinstall `npm install`
