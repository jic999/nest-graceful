import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { SysRoleService } from './sys-role.service'
import { AssignPermsDto, CreateSysRoleDto, SysRoleIdDto, UpdateSysRoleDto } from './sys-role.dto'

@Controller('sys-role')
export class SysRoleController {
  constructor(
    private sysRoleService: SysRoleService,
  ) {}

  @Post()
  public async create(@Body() body: CreateSysRoleDto) {
    return await this.sysRoleService.create(body)
  }

  @Patch()
  public async update(@Body() body: UpdateSysRoleDto) {
    return await this.sysRoleService.update(body)
  }

  @Delete(':id')
  public async remove(@Param() param: SysRoleIdDto) {
    return await this.sysRoleService.remove(param.id)
  }

  @Get(':id')
  public async fetch(@Param() param: SysRoleIdDto) {
    return await this.sysRoleService.fetch(param.id)
  }

  @Get()
  public async findAll() {
    return await this.sysRoleService.findAll()
  }

  @Post('assignPerms')
  public async assignPerms(@Body() body: AssignPermsDto) {
    return await this.sysRoleService.assignPerms(body)
  }
}
