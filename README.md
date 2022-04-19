# Thoth: The pyramid of open knowledge
## About Thoth
![Thoth banner image](./docs/images/Banner.png)
This is something like GitHub Gist, but it's cooler than that! Thoth provides features like saving, sharing, and organizing your code snippets to help you remember forgotten code usage.

## Project setup
### Install dependencies
* Executing `npm install` will install all the dependencies, but plz restore `package-lock.json` file to prevent unnecessary changes.
```
npm install; git restore package-lock.json
```

### Hot-reloads for development
* Executing a command below will host a webpage to `localhost:8080`.
```
npm run develop
```

### Development build
```
npm run build
```

### Production build
* Since building the code for production and deploying are triggered automatically by GitHub action, you dont't need to do them on your own.
