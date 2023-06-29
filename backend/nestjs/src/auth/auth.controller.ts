import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: AuthDto) {
    console.log({ dto });
    return this.authService.signup(dto);
  }

  @Post('signin')
  signin(@Body() dto: AuthDto) {
    return this.authService.signin(dto);
  }

  @Get('users')
  users() {
    return this.authService.users();
  }

  @Get('user/:id')
  user(@Param('id', ParseIntPipe) id: number) {
    return this.authService.user(id);
  }
}
