import { Body, Controller, Get, Post } from '@nestjs/common'
import { SysUserService } from './sys-user.service'
import { AssignRoleDto, CreateSysUserDto } from './sys-user.dto'
import { SysUser } from '@/entity/sys-user.entity'
import { Permission } from '@/common/decorators'

@Controller('sys-user')
export class SysUserController {
  constructor(
    private sysUserService: SysUserService,
  ) {}

  @Post()
  @Permission('sys:user:create')
  public async create(@Body() body: CreateSysUserDto): Promise<null> {
    await this.sysUserService.create(body)
    return null
  }

  @Get()
  @Permission('sys:user:read')
  public async findAll(): Promise<SysUser[]> {
    return this.sysUserService.findAll()
  }

  @Post('assignRole')
  public async assignRole(@Body() body: AssignRoleDto): Promise<null> {
    await this.sysUserService.assignRole(body)
    return null
  }
}
