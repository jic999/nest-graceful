import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

export interface Response<T> {
  code: number
  message: string
  data: T
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(_: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    return next
      .handle()
      .pipe(
        map(data => ({
          code: 200,
          message: 'Request success',
          data,
        })),
      )
  }
}
