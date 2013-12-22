'use strict';
var apx = require('apx')

apx.start({
  cwd: __dirname,
  translators: 'apx-express-socket.io',
  express: {
    routes: [
      {get: {path: '/hello', file: 'actions/hello.js'}}
    ]
  }
})