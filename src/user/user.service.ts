import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { RegisterDto } from 'src/common/dto/user.dto'
import { User } from 'src/entity/user.entity'
import { Repository } from 'typeorm'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private user: Repository<User>,
  ) {}

  public async fetch(username: string): Promise<User> {
    const user = await this.user.findOneBy({ username })
    return user
  }

  public async register(registerDto: RegisterDto) {
    const isExist = await this.fetch(registerDto.username)
    if (isExist)
      return { message: 'User already exists' }
    const user = this.user.create(registerDto)
    return this.user.save(user)
  }
}
