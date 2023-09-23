import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common'
import { Response } from 'express'

@Catch(Error)
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const _request = ctx.getRequest<Request>()
    const response = ctx.getResponse<Response>()
    const status = exception.getStatus() || HttpStatus.INTERNAL_SERVER_ERROR
    let message = exception.message

    // validation exception
    if (exception instanceof BadRequestException) {
      const errMessage = (exception.getResponse() as any)?.message as string[]
      message = errMessage ? errMessage.join(', ') : message
    }

    response
      .status(status)
      .json({
        code: status,
        message,
      })
  }
}
