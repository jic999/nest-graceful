import { Body, Controller, Post } from '@nestjs/common'
import { SysPermissionService } from './sys-permission.service'
import { CreateSysPermissionDto } from './sys-permission.dto'

@Controller('sys-permission')
export class SysPermissionController {
  constructor(
    private sysPermissionService: SysPermissionService,
  ) {}

  @Post()
  public create(@Body() body: CreateSysPermissionDto) {
    return this.sysPermissionService.create(body)
  }
}
