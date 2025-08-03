const Wiki = require('wiki.js');
const config = require('./config.yml');

Wiki(config).start();
