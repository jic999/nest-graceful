import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common'
import { SysPermissionService } from './sys-permission.service'
import { CreateSysPermissionDto, SysPermissionIdDto, UpdateSysPermissionDto } from './sys-permission.dto'

@Controller('sys-permission')
export class SysPermissionController {
  constructor(
    private sysPermissionService: SysPermissionService,
  ) {}

  @Post()
  public create(@Body() body: CreateSysPermissionDto) {
    return this.sysPermissionService.create(body)
  }

  @Patch()
  public update(@Body() body: UpdateSysPermissionDto) {
    return this.sysPermissionService.update(body)
  }

  @Delete(':id')
  public remove(@Body() body: SysPermissionIdDto) {
    return this.sysPermissionService.remove(body.id)
  }

  @Get(':id')
  public fetch(@Body() body: SysPermissionIdDto) {
    return this.sysPermissionService.fetch(body.id)
  }

  @Get()
  public findAll() {
    return this.sysPermissionService.findAll()
  }
}
