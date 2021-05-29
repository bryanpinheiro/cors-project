# cors-project
Cross-origin resource sharing (CORS) restrict an API to share its resources only to specified IPs.

## http-server
This package allows us to serve static files. The code below sets the port to `8080` and the hostname to `localhost`.

```
http-server --port 8080 -a localhost
```

## Usage
### 1. Installing dependencies
```
yarn install
```

### 2. Starting the server
```
yarn run dev:server
```

### 3. Starting the client
```
yarn run dev:client
```

