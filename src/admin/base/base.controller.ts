import { Body, Controller, Get, Headers, Post, Query, UnauthorizedException } from '@nestjs/common'
import { AuthService } from 'src/auth'
import { LoginDto } from 'src/common/dto'
import { UserService } from 'src/user'
import { Public } from '@/common/decorators'

@Controller()
export class AdminBaseController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Post('login')
  @Public()
  public async login(@Body() loginDto: LoginDto) {
    const user = await this.authService.validateSysUser(loginDto.username, loginDto.password)
    if (!user)
      throw new UnauthorizedException('Invalid username or password')
    return { user, ...this.authService.jwtSign({ userId: user.id, username: user.username, roles: [] }) }
  }

  @Get('getUserInfo')
  public async getUserInfo(@Headers('Authorization') authorization: string) {
    const token = authorization.replace('Bearer ', '')
    if (!token)
      throw new UnauthorizedException('No token')
    const payload = this.authService.getPayload(token)
    if (!payload?.username)
      throw new UnauthorizedException('Invalid token')
    const { salt: _salt, ...userInfo } = await this.userService.fetch(payload.username)
    return userInfo
  }

  @Get('refreshToken')
  public async refreshToken(@Query('token') token: string) {
    const payload = this.authService.getPayload(token)
    if (!payload?.userId || !this.authService.validateRefreshToken(payload, token))
      throw new UnauthorizedException('Invalid token')
    const user = await this.userService.fetch(payload.username)
    return this.authService.jwtSign({ userId: user.id, username: user.username, roles: [] })
  }
}
