import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from './config/index';

@Module({
  imports: [TypeOrmModule.forRoot(env.DATABASE_CONFIG)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
