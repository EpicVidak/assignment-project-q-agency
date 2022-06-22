# assignment-project

## Project setup
```
pnpm install
```

### Compiles and hot-reloads for development
```
pnpm run serve
```

### Compiles and minifies for production
```
pnpm run build
```

### Language localization
```
To create new language:
 - src/javascript/i18n/
 1) create json file and populate it with values
 2) in index.js add to locales constant the name of the new language

To change language for next build:
 - root
 1) in .env file change the value of I18N_LOCALE to one of the values in locales constant (src/javascript/i18n/index.js)
```

### Jest tests
```
To run jest test suit type:
pnpm jest
```

### Time estimate
```
 - Project setup: 1h
 - Navbar and home page: 30 min
 - Posts page: 2h
 - View Post page: 2h
 - Author shenanigans: 30 min
 - Refator: ~30 min
 - Setting up jest: 1h
 - Writing tests: 2h 30min
```
