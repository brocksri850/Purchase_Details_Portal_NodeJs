export interface DatabaseConfig {

  username: string;
  password: string;
  database: string;
  host: string;
  port: number;
  dialect: string;
  logging: boolean | Function;
  force: boolean;
  timezone: string;
}

export const databaseConfig: DatabaseConfig = {

  username: 'root',
  password: 'root',
  database: 'purchase_details',
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  logging: false,
  force: true,
  timezone: '+00:00'
}