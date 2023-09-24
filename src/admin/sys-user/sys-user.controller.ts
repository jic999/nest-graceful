import { Body, Controller, Post } from '@nestjs/common'
import { SysUserService } from './sys-user.service'
import { CreateSysUserDto } from './sys-user.dto'

@Controller('sys-user')
export class SysUserController {
  constructor(
    private sysUserService: SysUserService,
  ) {}

  @Post()
  public async create(@Body() body: CreateSysUserDto): Promise<null> {
    await this.sysUserService.create(body)
    return null
  }
}
