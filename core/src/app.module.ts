import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import {SqliteProvider} from "./infrastructure/sqliteProvider";

@Module({
  imports: [InfrastructureModule],
  controllers: [AppController],
  providers: [AppService, SqliteProvider],
})
export class AppModule {}
