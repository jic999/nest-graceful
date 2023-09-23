import { PickType } from '@nestjs/mapped-types'
import { User } from 'src/entity/user.entity'

export class RegisterDto extends PickType(User, ['username', 'password']) {}
