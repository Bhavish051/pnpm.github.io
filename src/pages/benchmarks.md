# Benchmarks of JavaScript Package Managers

**Last benchmarked at**: _Nov 3, 2021, 2:47 AM_ (_daily_ updated).

This benchmark compares the performance of npm, pnpm, and Yarn (both regular and PnP variant).

Here's a quick explanation of how these tests could apply to the real world:

- `clean install`: How long it takes to run a totally fresh install: no lockfile present, no packages in the cache, no `node_modules` folder.
- `with cache`, `with lockfile`, `with node_modules`: After the first install is done, the install command is run again.
- `with cache`, `with lockfile`: When a repo is fetched by a developer and installation is first run.
- `with cache`: Same as the one above, but the package manager doesn't have a lockfile to work from.
- `with lockfile`: When an installation runs on a CI server.
- `with cache`, `with node_modules`: The lockfile is deleted and the install command is run again.
- `with node_modules`, `with lockfile`: The package cache is deleted and the install command is run again.
- `with node_modules`: The package cache and the lockfile is deleted and the install command is run again.
- `update`: Updating your dependencies by changing the version in the `package.json` and running the install command again.

## Lots of Files

The app's `package.json` [here](https://github.com/pnpm/pnpm.github.io/blob/main/benchmarks/fixtures/alotta-files/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | ---  | ---  | ---      |
| install |       |          |             | 47.2s | 14.5s | 20.7s | 26.8s |
| install | ✔     | ✔        | ✔           | 2.1s | 1.1s | 2.5s | n/a |
| install | ✔     | ✔        |             | 11.6s | 3.8s | 7.4s | 1.7s |
| install | ✔     |          |             | 17.3s | 6.9s | 13.7s | 6.7s |
| install |       | ✔        |             | 30.9s | 11.8s | 13.4s | 19.4s |
| install | ✔     |          | ✔           | 2.8s | 1.7s | 7.9s | n/a |
| install |       | ✔        | ✔           | 2.1s | 1.2s | 8.7s | n/a |
| install |       |          | ✔           | 2.8s | 5.1s | 14.4s | n/a |
| update  | n/a | n/a | n/a | 2.1s | 10.7s | 17s | 33.4s |

![Graph of the alotta-files results](../../static/img/benchmarks/alotta-files.svg)