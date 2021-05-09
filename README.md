# Minimized React-TypeScript-TailwindCSS Template

This is a minimized React project that is buit from scratch with Webpack, including TypeScript, TailwindCSS, Jest, React Testing Library that follow AirBnb coding conventions with ESlint and Prettier.

* ✅ React 17
* ✅ TailwindCSS that supports autoprefix to be compatible with Chrome, Firefox and Safari
* ✅ TypeScript 4
* ✅ Configurable Webpack 5 that separates Development and Production environment
* ✅ Supports Jest with React Testing Library
* ✅ Strictly config ESLint + Prettier that follows AirBnb's coding conventions

## Setup

1. Install NodeJS: https://nodejs.org/en/, you can easily switch node version with NVM (https://github.com/nvm-sh/nvm)
2. Install Yarn: https://yarnpkg.com/
3. Install project's dependencies via terminal with: `yarn install` or just `yarn`.
4. Use any code editor, VSCode is recommended.

### Useful VSCode plugins:
* Tailwind CSS IntelliSense: https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss
* Prettier - Code formatter: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
* ESLint: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

## Development
Start project development:
```bash
yarn dev
```

Check/fix lint errors automatically:
```bash
yarn lint
yarn lint:fix
```
## Production/Deployment
To build project for production deployment with optimization:
```bash
yarn build
```

## Unit Testing
Run all unit tests and show Code Coverage report:
```bash
yarn test
```

## Documentations
* Coding conventions following AirBnb coding style guide: https://airbnb.io/javascript/react/
* TailwindCSS: https://tailwindcss.com/
* React Testing Library: https://testing-library.com/docs/react-testing-library/intro/