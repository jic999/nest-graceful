import { Injectable } from '@nestjs/common'
import { User } from './user.interface'

@Injectable()
export class UserService {
  public async fetch(username: string): Promise<User> {
    return Promise.resolve({
      id: 2024,
      password: 'crypto',
      username,
      email: `${username}@test.com`,
      roles: ['test'],
    })
  }
}
