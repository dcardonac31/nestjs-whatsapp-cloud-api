import { HttpModule } from '@nestjs/axios';
import { HttpConfigService } from 'src/httpService.config';
import { Module } from '@nestjs/common';
import { TestsController } from './tests/tests.controller';
import { TestsService } from './tests/tests.service';
import { ConsumeTemplateController } from './consume-template/consume-template.controller';
import { ConsumeTemplateService } from './consume-template/consume-template.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: HttpConfigService,
    }),
    ShareModuleModule
  ],
  controllers: [TestsController, ConsumeTemplateController],
  providers: [TestsService, ConsumeTemplateService]
})
export class ShareModuleModule {}
