# Exercise 01 - Hello World

Purpose: introduce you to the process of running the tests

.js file is where you write your code

`spec` file contains the tests that verify your code is functional:
```javascript
const helloWorld = require('./helloWorld');

describe('Hello World', function() {
  test('says "Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
```
- `require()` to import the code from the javascript file (`helloWorld.js`)
- `describe()` is the body of the test.   
- `test()` function describes what should be happening in plain english and then includes the
- `expect()` compares the function's actual output to the expected output

run `npm test helloWorld.spec.js` in the terminal and watch it fail.  The output should tell you what went wrong with your code.  In this case, running the `helloWorld()` function should return the phrase 'Hello, World!' but instead it returns an empty string...

For the most part we've set up these tests in such a way that you only have to write the code being tested.  You should not have to worry about importing or exporting anything at this stage.
