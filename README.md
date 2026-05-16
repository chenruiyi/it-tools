<picture>
    <source srcset="./.github/logo-dark.png" media="(prefers-color-scheme: light)">
    <source srcset="./.github/logo-white.png" media="(prefers-color-scheme: dark)">
    <img src="./.github/logo-dark.png" alt="IT Tools">
</picture>

<p align="center">
Collection of handy online tools for developers, with great UX.
</p>

## Self Host

```sh
docker run -d --name it-tools --restart unless-stopped -p 8080:80 ghcr.io/chenruiyi/it-tools:latest
```

## Development

### Setup

```sh
pnpm install
```

### Dev Server

```sh
pnpm dev
```

### Build

```sh
pnpm build
```

### Test

```sh
pnpm test
```

### Create a new tool

```sh
pnpm run script:create:tool my-tool-name
```

## Contributors

Big thanks to all the people who have already contributed!

[![contributors](https://contrib.rocks/image?repo=corentinth/it-tools&refresh=1)](https://github.com/corentinth/it-tools/graphs/contributors)

## License

This project is under the [GNU GPLv3](LICENSE).
