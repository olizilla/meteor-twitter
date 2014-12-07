Package.describe({
  name: 'cscottnet:twitter',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('cscottnet:twitter.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('cscottnet:twitter');
  api.addFiles('cscottnet:twitter-tests.js');
});
