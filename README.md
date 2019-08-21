## Init

```
npm i -D enzyme jest-cli enzyme-adapter-react-16
npm i -D redux-mock-store fetch-mock
```

```
npm i -S redux react-redux redux-thunk
```

### index.js

```
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

render(<App />, document.getElementById('root'));
```

### App.test.js

```
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);

it('renders correctly', () => {
  expect(app).toMatchSnapshot();
});
```


### Configure

`setupTests.js` in `src` folder.
```
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```


## Coverage

```
npm run test -- --coverage
```

## Folder under Test

In `package.json`
```
 "jest": {
    "collectCoverageFrom": [
      "src/**/*.js",
      "!src/index.js"
    ]
  }
```

## Deploy to gh-page by Travis.ci

https://medium.com/@bezgachev/6-simple-steps-to-automatically-test-and-deploy-your-javascript-app-to-github-pages-c4c32a34bcb1

## Debug in Test

```
console.log(app.debug());
```