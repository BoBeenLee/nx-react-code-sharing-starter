# NxReactCodeSharing ![build](https://github.com/BoBeenLee/nx-react-code-sharing/actions/workflows/ci-cd.yml/badge.svg)

## 📂 Directory structure

    root
    ├── apps
    ├──── nextjs-app       # web
    ├──── remix-app        # web
    ├──── rn-app           # app
    ├──── standalone-app   # web
    ├── libs
    ├──── sdk              # sdk for test
    ├──── shared
    ├─────── interfaces    # 도메인에 따른 인터페이스
    ├─────── libs          # 공통 라이브러리 ex) 로그, 스토리지...
    ├─────── ui-components # 공통 UI 컴포넌트
    ├─────── stores        # 공통 상태관리스토어
    ├─────── styles        # 공통 스타일
    ├─────── utils         # 공통 유틸
    └── README.md

## Convention

- 파일 이름 네이밍
  - 하이픈 형식 ex) z-index.ts, login-modal.tsx ...
- 컴포넌트명 네이밍
  - ex) const LoginModal = () => { ... }
- 패키지, 폴더명 단수or복수 네이밍

  - 여러파일이 들어갈거같다면 복수명으로
    ex) shared/styles, shared/libs ...
  - 고유 기능을 의미한다면 단수
    ex) app/email, app/login ...

## Global Types Definition Setup

- tsconfig.lib.json, tsconfig.app.json files 코드를 아래와 같이 추가합니다.
  - ex) libs/shared/interfaces/tsconfig.libs.json

```
"files": [
    "../../../types/global.d.ts", <-- depth에 따라 경로 위치는 다를 수 있음
],
```

### 참고 문서

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

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `nx e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
