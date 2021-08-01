import {Inject, Injectable} from '@nestjs/common';
import {Sqlite} from "./infrastructure/sqliteProvider";
import {Database} from "sqlite";

@Injectable()
export class AppService {
  constructor(@Inject(Sqlite) private readonly sqlite: Database) {
  }

  async getHello(): Promise<string> {
    await this.sqlite.exec('INSERT INTO tbl VALUES ("Hello World!")')

    const result: { col: string } = await this.sqlite.get('SELECT col FROM tbl WHERE col = ?', 'Hello World!')
    return result.col;
  }
}
