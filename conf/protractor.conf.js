exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    'browserName': 'firefox',
    'firefox_binary': 'C:/Program Files (x86)/Mozilla Firefox/firefox.exe',
    'binary_': 'C:/Program Files (x86)/Mozilla Firefox/firefox.exe'
  },
  specs: ['../stories/e2e/*.js'],
  framework: 'mocha',
  onPrepare: function () {
    expect = require('chai').use(require('chai-as-promised')).expect;
  },
  mochaOpts: {
    enableTimeouts: false,
    slow: 3000,
    reporterOptions: {
      console: true,
      screenshot: true
    },
    ui: 'bdd'
  }
}