'use strict';

const fs = require('fs');

class Logger {
    constructor(name) {
        this.stream = fs.createWriteStream(name);
    }

    log(message) {
        if (this.stream) {
            this.stream.write(message + '\n');
        }
    }
}

// Usage

const logger = new Logger('file.log');
logger.log('Here we are');