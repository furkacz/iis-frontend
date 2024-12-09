# iis-frontend

## Project requirements

| Requirement | Version  |
|:-----------:|----------|
| Node.js     | ^21.7.1  |
| yarn        | ^1.22.21 |

## Project setup
```bash
yarn install
```

### Compiles and hot-reloads for development
```bash
yarn dev
```

### Runs mocked API server for development
```bash
yarn mock-api
```

### Production preview
```bash
yarn prod
```

### Compiles and minifies for production
```bash
yarn build
```

### Lints all project files
```bash
yarn lint
```

## Docker configuration for deployment

Configure application by setting environmental variables in Docker.

List of all available configuration variables is located in `.env.build`.

### Example:

For variable defined in `.env.build`:

```bash
KEY=VALUE
```

Set variable while running container:

```bash
docker run -e KEY=[ACTUAL_VALUE]
```
