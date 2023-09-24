import { Body, Controller, Get } from '@nestjs/common'
import { AuthService } from 'src/auth'

@Controller()
export class AdminBaseController {
  constructor(
    private authService: AuthService,
  ) {}

  @Get('login')
  public async login() {
    return 'login'
  }
}
