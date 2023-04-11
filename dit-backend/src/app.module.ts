import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [
      ConfigModule.forRoot({
        envFilePath: '.env'
      }),
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'dit-postgres',
        port: 5432,
        username: "glebka",
        password: "password",
        database: "ditDB",
        entities: [],
        synchronize: true,
      })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
