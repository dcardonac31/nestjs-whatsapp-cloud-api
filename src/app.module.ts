import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShareModuleModule } from './share-module/share-module.module';

@Module({
  imports: [ShareModuleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
