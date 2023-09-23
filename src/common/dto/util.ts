import { Type } from '@nestjs/common'
import { IntersectionType, OmitType, PartialType, PickType } from '@nestjs/mapped-types'

export function ValidationClassBuilder<T, N extends keyof T, E extends keyof T>(
  Entity: Type<T>,
  necessary: readonly N[] = [],
  excludes: readonly E[] = [],
) {
  return IntersectionType(
    PickType(Entity, necessary),
    PartialType(OmitType(Entity, [...necessary, ...excludes])),
  )
}
