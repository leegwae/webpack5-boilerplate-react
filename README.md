# webpack5-boilerplate-react

## 내용

1. 의존성 초기화
2. `.gitignore` 작성
3. `TypeScript` 설치, 설정
4. `Babel` 설치, 설정
5. `Webpack` 설치, 설정
6. `React` 설치, 설정
7. `Eslint` & `Prettier` 설치, 설정
8. `Styled Components` 설치, 설정

## Getting started with yarn

```Bash
git clone https://github.com/leegwae/webpack5-boilerplate-react.git
cd webpack5-boilerplate-react
yarn install
```

## Available Scripts

### `yarn start`

Runs the app in the development with webpack dev server.
Open http://localhost:3000 to view it in your browser.

### `yarn build`

Builds the app for production to the `dist` folder.

## 체크리스트

- [ ] 개발 전 `tsconfig.json`에서 `compilerOptions.paths`로 alias 설정하기

```JSON
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@common/*": ["src/common/*"],
      "src/*": ["src/*"]
    }
  }
}
```

- [ ] 환경변수 자동완성을 위해 전역 타입 정의하기

```typescript
declare namespace NodeJS {
  interface ProcessEnv {
    TEST: string;
  }
}
```

## TODO

- [ ] `react-router-dom` 설치, 설정
- [ ] `styled-components` Theming
- [ ] `husky`, `lint-staged`로 린트 자동화
