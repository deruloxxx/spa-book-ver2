import * as sqlite3 from 'sqlite3'
import {Database, open} from 'sqlite'

export const Sqlite = Symbol("Sqlite")

export const SqliteProvider = {
  provide: Sqlite,
  useFactory: async (): Promise<Database> => {
    const db = await open({
      filename: ':memory:',
      driver: sqlite3.Database
    });

    await db.exec('CREATE TABLE tbl (col TEXT)')

    return db
  }
}
