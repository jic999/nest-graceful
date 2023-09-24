import { PickType } from '@nestjs/mapped-types'
import { BaseUser } from 'src/entity/base/user-base.entity'

export class RegisterDto extends PickType(BaseUser, ['username', 'password']) {}

export class LoginDto extends PickType(BaseUser, ['username', 'password']) {}
