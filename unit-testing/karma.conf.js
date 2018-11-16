module.exports = function (config) {
  config.set({
    frameworks: ['mocha', 'chai'],

    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-route/angular-route.js',
      'node_modules/angular-resource/angular-resource.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'js/app.js',
      'js/**/*.js',
    ],
    browsers: ['Chrome'],
    autoWatch: true,
    singleRun: false,
    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-chrome-launcher'
    ]
  })
}