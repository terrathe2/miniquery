const liveServer = require('live-server')

let parameters = {
  port: 8080,
  host: 'localhost',
  root: '/public',
  open: false,
  ignore: 'scss,my/templates',
  file: 'index.html',
  wait: 1500,
  mount: [['/components','./node_modules']],
  logLevel: 2,
  middleware: [
    function(req, res, next) {
      next();
    }
  ]
}

liveServer.start(parameters)
