import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UserService } from './user.service';
import { LocalGuard } from './guards/local.guard';
import { Request } from 'express';
import { JwtAuthGuard } from './guards/jwt.guard';
import { JwtService } from '@nestjs/jwt';

@Controller()
export class UserController {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  @Post('users')
  async createUser(@Body() createUserDto: CreateUserDto) {
    const user = await this.userService.createUser(createUserDto);
    return 'User created successfully';
  }

  @Post('login')
  @UseGuards(LocalGuard)
  login(@Req() req: any) {
    const user = req.user;
    const response = {
      token: this.jwtService.sign({
        username: user.username,
        email: user.email,
      }),
      message: 'Đăng nhập thành công',
      id: user.username,
    };
    return response;
  }

  @Get('status')
  @UseGuards(JwtAuthGuard)
  status(@Req() req: Request) {
    console.log('Inside AuthController status method');
    console.log(req.user);
    return req.user;
  }
}
