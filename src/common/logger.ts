'use strict';
import * as path from "path";

import { transports, Logger } from 'winston';
import { Request, Response } from 'express';

export interface LoggingConfig {
  file: {
    level: string,
    filename: string,
    handleExceptions: boolean,
    json: boolean,
    maxsize: number,
    maxFiles: number,
    colorize: boolean
  };
  console: {
    level: string,
    handleExceptions: boolean,
    json: boolean,
    colorize: boolean
  };
  directory: string;
}

export const loggingConfig: LoggingConfig = {
  file: {
    level: 'error',
    filename: 'adloggs.log',
    handleExceptions: true,
    json: true,
    maxsize: 5242880,
    maxFiles: 100,
    colorize: false
  },
  console: {
    level: 'error',
    handleExceptions: true,
    json: false,
    colorize: true
  },
  directory: __dirname
};

let config = loggingConfig;
config.file.filename = `${path.join(config.directory, '../logs')}/${config.file.filename}`;

// if (cluster.isMaster) {
//   mkdirp.sync(path.join(config.directory, '../logs'));
// }

export const logger = new Logger({
  transports: [
    new transports.File(config.file),
    new transports.Console(config.console)
  ],
  exceptionHandlers: [
    new transports.Console({ json: true, timestamp: true, level: 'error' }),
    new transports.File({ filename: path.join(__dirname + '../logs/exceptions.log'), json: true, level: 'error' })
  ],
  exitOnError: false
});

export const skip = (req: Request, res: Response): boolean => {
  return res.statusCode >= 200;
};

export const stream = {
  write: (message: string, encoding: string): void => {
    logger.info(message);
  }
};
