import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DatabaseService } from './database.service';
import { ApiController } from './api.controller';

@Module({
  imports: [
    AuthModule,
  ],
  controllers: [AppController, ApiController],
  providers: [AppService, DatabaseService],
  exports: [DatabaseService]
})
export class AppModule { }
