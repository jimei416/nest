import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('应用系列接口')
@Controller('api')
export class AuthController {
  constructor(private readonly appService: AuthService) {}

  @Post('signup')
  @ApiOperation({ summary: '返回hello' })
  @ApiResponse({ type: String })
  signup() {
    return this.appService.sigup();
  }

  @Post('signin')
  @ApiOperation({ summary: '返回hello' })
  @ApiResponse({ type: String })
  signin() {
    return this.appService.login();
  }
}
