import { Body, Controller, Post } from '@nestjs/common'
import { RegisterDto } from 'src/common/dto/user.dto'
import { UserService } from 'src/user'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @Post('register')
  public async register(@Body() body: RegisterDto) {
    return this.userService.register(body)
  }

  @Post('login')
  public async login(@Body() body: RegisterDto) {
    const user = await this.authService.validateUser(body.username, body.password)
    if (!user)
      return { message: 'Invalid username or password' }
    return { user, sign: this.authService.jwtSign({ userId: user.id, username: user.username, roles: [] }) }
  }
}
