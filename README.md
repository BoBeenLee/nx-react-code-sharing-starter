# 🏛 nx-react-code-sharing-starter

![build](https://github.com/BoBeenLee/nx-react-code-sharing/actions/workflows/ci-cd.yml/badge.svg)

## Features

- ⚡️ Next.js 12
- ⚛️ React 18
- 📱 React Native
- ✨ TypeScript
- 💨 Emotion — Configured with Emotion Primitive which share React Native And Nextjs styling
- 📚 Storybook - Build component driven UIs faster
- 🏗 Nx.dev - Smart, Fast and Extensible Build System
- 🃏 Jest — Configured for unit testing
- 📈 Absolute Import and Path Alias — Import components using @/ prefix
- 📏 ESLint — Find and fix problems in your code, also will auto sort your imports
- 💖 Prettier — Format your code consistently
- 👷 Github Actions — Lint, Test your code on Master Branch, Automatic Storybook Deployment

## 📂 Directory structure

    root
    ├── apps
    ├──── nextjs-app       # nextjs app
    ├──── remix-app        # remix app
    ├──── rn-app           # react native app
    ├──── standalone-app   # nextjs standalone app
    ├── libs
    ├──── sdk              # sdk
    ├──── shared
    ├─────── interfaces    # shared interfaces (ex) User, Role, AccessToken ...)
    ├─────── libs          # primitive libs ex) logging, storage, analytics
    ├─────── ui-components # shared ui components, styles (ex) Button, Text... )
    ├─────── stores        # shared state management (ex) Todo based on zustand )
    ├─────── styles        # (deprecated)
    ├─────── utils         # shared utils (ex) string, datetime, object, uri ...)
    └── README.md

## Getting Started

### Install dependencies

```bash
yarn install
```

### Run the development server

You can start the nextjs using this command:

```bash
yarn dev
```

### Change defaults

There are some things you need to change including title, urls, favicons, etc.

Find all texts with `nx-react-code-sharing`, then change the package name

## Convention

### Naming Convention

- 파일 이름 네이밍
  - 하이픈 형식 ex) z-index.ts, login-modal.tsx ...
- 컴포넌트명 네이밍
  - ex) const LoginModal = () => { ... }
- 패키지, 폴더명 단수or복수 네이밍

  - 여러파일이 들어갈거같다면 복수명으로
    ex) shared/styles, shared/libs ...
  - 고유 기능을 의미한다면 단수
    ex) app/email, app/login ...

### Commit Convention

- This starter is using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), it is mandatory to use it to commit changes.

## Global Types Definition Setup

- tsconfig.lib.json, tsconfig.app.json files 코드를 아래와 같이 추가합니다.
  - ex) libs/shared/interfaces/tsconfig.libs.json

```
"files": [
    "../../../types/global.d.ts", <-- depth에 따라 경로 위치는 다를 수 있음
],
```

### Reference

- https://stackoverflow.com/questions/68986789/nx-react-next-js-shared-type-declaration-file

## Development server

### Development Deployment

```
heroku container:login

npm run nextjs-app:deploy:production

docker tag DOCKER_IMAGE_ID registry.heroku.com/nextjs-app-dev-app/web

docker push registry.heroku.com/nextjs-app-dev-app/web

heroku container:release web --app=nextjs-app-dev-app
```

## Issue

- rnapp 실행시 에러 `Flipper-DoubleConversion` requires CocoaPods version `>= 1.9`, which is not satisfied by your current version, `1.8.4`
  - `gem install cocoapods`으로 cocoapods 업데이트 하기 위해선 `rvm list` -> `rvm use 3.0` 3.0 버젼으로 맞추고 다시 `gem install cocoapods` 합니다.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars0.githubusercontent.com/u/1489321?v=4" width="100px;"/><br /><sub><b>BoBeenLee</b></sub>](https://bbl.netlify.com/)<br />[💬](#question-BoBinLee "Answering Questions") [📝](#blog-BoBinLee "Blogposts") [🐛](https://github.com/BoBinLee/asking-price/issues?q=author%3ABoBinLee "Bug reports") [💻](https://github.com/BoBinLee/asking-price/commits?author=BoBinLee "Code") [🎨](#design-BoBinLee "Design") [📖](https://github.com/BoBinLee/asking-price/commits?author=BoBinLee "Documentation") [📋](#eventOrganizing-BoBinLee "Event Organizing") [💡](#example-BoBinLee "Examples") [💵](#financial-BoBinLee "Financial") [🔍](#fundingFinding-BoBinLee "Funding Finding") [🤔](#ideas-BoBinLee "Ideas, Planning, & Feedback") [🚇](#infra-BoBinLee "Infrastructure (Hosting, Build-Tools, etc)") [📦](#platform-BoBinLee "Packaging/porting to new platform") [🔌](#plugin-BoBinLee "Plugin/utility libraries") [👀](#review-BoBinLee "Reviewed Pull Requests") [📢](#talk-BoBinLee "Talks") [⚠️](https://github.com/BoBinLee/asking-price/commits?author=BoBinLee "Tests") [🔧](#tool-BoBinLee "Tools") [🌍](#translation-BoBinLee "Translation") [✅](#tutorial-BoBinLee "Tutorials") [📹](#video-BoBinLee "Videos") |
| :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->
