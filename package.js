Package.describe({
  name: 'cscottnet:twitter',
  summary: 'Interface with Twitter APIs on Meteor server',
  version: '1.2.5',
  git: 'https://github.com/cscott/meteor-twitter.git'
});

Npm.depends({"twitter": "1.2.5"});

Package.onUse(function(api) {
  api.addFiles([
    'twitter.js'
  ], 'server');
  if (api.export) { api.export('Twitter', 'server'); }
});
