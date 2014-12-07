Package.describe({
  name: 'cscottnet:twitter',
  summary: 'Interface with Twitter APIs on Meteor server',
  version: '0.2.5',
  git: 'https://github.com/cscott/meteor-twitter.git'
});

Npm.depends({"twitter": "0.2.5"});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.addFiles([
    'twitter.js'
  ], 'server');
  if (api.export) { api.export('Twitter', 'server'); }
});

Package.onTest(function(api) {
  /*
  api.use('tinytest');
  api.use('cscottnet:twitter');
  api.addFiles('twitter-tests.js');
  */
});
