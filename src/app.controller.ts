import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('应用系列接口')
@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('getHello')
  @ApiOperation({ summary: '返回hello' })
  @ApiResponse({ type: String })
  getHello(): string {
    return this.appService.getHello();
  }
}
