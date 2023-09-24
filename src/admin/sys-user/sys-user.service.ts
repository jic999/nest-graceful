import { ConflictException, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { SysUser } from 'src/entity/sys-user.entity'
import { Repository } from 'typeorm'
import { CreateSysUserDto } from './sys-user.dto'

@Injectable()
export class SysUserService {
  constructor(
    @InjectRepository(SysUser)
    private sysUser: Repository<SysUser>,
  ) {}

  public async create(data: CreateSysUserDto): Promise<SysUser> {
    // Query whether the username exists
    const isExist = await this.sysUser.exist({ where: { username: data.username } })
    if (isExist)
      throw new ConflictException('Username already exists')

    const user = this.sysUser.create(data)
    user.password = '123456'

    return this.sysUser.save(user)
  }
}
