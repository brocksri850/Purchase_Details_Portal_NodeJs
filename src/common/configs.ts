
'use strict';
import {databaseConfig, DatabaseConfig} from "./dbConfig";
import {loggingConfig, LoggingConfig} from "./logger";

export class Configs {
  private _databaseConfig: DatabaseConfig;
  private _loggingConfig: LoggingConfig;
  constructor() {
    this._databaseConfig = databaseConfig;
    this._loggingConfig = loggingConfig;
  }

  getDatabaseConfig(): DatabaseConfig {
    return this._databaseConfig;
  }
  getLoggingConfig(): LoggingConfig {
    return this._loggingConfig;
  }
}

export const configs = new Configs();
