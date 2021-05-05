# Phone Catalogue Code Challenge

## Requirements

[REACT-PhoneCatalog-code-challenge](./docs/REACT-PhoneCatalog-code-challenge.pdf)

## Development
### Server 

```bash
cd server
```

```bash
npm install
```

```
npm install -g @nestjs/cli
```

```bash
npm run start:dev
```

swagger docs: [http://localhost:3001/api/v1/swagger](http://localhost:3001/api/v1/swagger)

### Front-end app ([Read more](./react-app/README.md))


```bash
cd react-app
```

```bash
npm install
```

```bash
npm start
```

local url: [http://localhost:3000](http://localhost:3000)

## Testing

### Server ([Read more](./server/README.md))

```bash
cd server
```

```bash
npm run test
```

### Client

```bash
cd react-app
```

```bash
npm run test
```

## Docker deployment

```bash
docker-compose build
docker-compose up -d
```

docker url: [http://localhost:8080](http://localhost:3000)
