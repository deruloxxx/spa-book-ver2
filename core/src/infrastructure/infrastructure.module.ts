import { Module } from '@nestjs/common';
import {SqliteProvider} from "./sqliteProvider";

@Module({
  providers: [SqliteProvider],
  exports: [SqliteProvider]
})
export class InfrastructureModule {}
