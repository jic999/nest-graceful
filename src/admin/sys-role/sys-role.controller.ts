import { Body, Controller, Post } from '@nestjs/common'
import { SysRoleService } from './sys-role.service'
import { CreateSysRoleDto } from './sys-role.dto'

@Controller('sys-role')
export class SysRoleController {
  constructor(
    private sysRoleService: SysRoleService,
  ) {}

  @Post()
  public async create(@Body() body: CreateSysRoleDto) {
    return await this.sysRoleService.create(body)
  }
}
