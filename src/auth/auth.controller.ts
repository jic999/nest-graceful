import { Controller, Get } from '@nestjs/common'

@Controller()
export class AuthController {
  @Get('test')
  public test() {
    return 'test'
  }
}
