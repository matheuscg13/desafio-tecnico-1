import 'dotenv/config';
import path from 'path';
import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { Users } from './entities/user.entitiy';
import { Contacts } from './entities/contact.entity';
import { initial1679579029934} from "./migrations/1679579029934-initial"
import { initial1679579261685 } from "./migrations/1679579261685-initial"
import { relations1679660700760 } from './migrations/1679660700760-relations';
import { addPassword1679661089170 } from './migrations/1679661089170-addPassword';
import { unique1679701218172 } from './migrations/1679701218172-unique';

const dataSourceConfig = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, './entities/**.{ts,js}');
  const migrationPath: string = path.join(__dirname, './migrations/**.{ts,js}');

  const dbUrl: string | undefined = process.env.DATABASE_URL;

  if (!dbUrl) throw new Error("Missing env var: 'DATABASE_URL'");

  const nodeEnv: string | undefined = process.env.NODE_ENV;

  if (nodeEnv === 'test') {
    return {
      type: 'sqlite',
      database: ':memory:',
      synchronize: true,
      entities: [entitiesPath],
    };
  }

  return {
    type: 'postgres',
    url: dbUrl,
    synchronize: false,
    logging: true,
    entities: [Users, Contacts],
    migrations: [initial1679579029934, initial1679579261685, relations1679660700760, addPassword1679661089170, unique1679701218172],
  };
};

export const AppDataSource = new DataSource(dataSourceConfig());