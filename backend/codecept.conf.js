const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './codecept/tests/*_test.js',
  output: './codecept/output',
  helpers: {
    REST: {
      endpoint: 'http://localhost:3000'
    },
    JSONResponse: {}
  },
  include: {
    I: './codecept/steps_file.js'
  },
  name: 'backend'
}
