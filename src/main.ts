import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { AppModule } from './app.module'
import { TransformInterceptor } from './common/interceptors'
import { GlobalExceptionFilter } from './common/filters'
import { initSystem } from './init'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalFilters(new GlobalExceptionFilter())
  app.useGlobalInterceptors(new TransformInterceptor())
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    stopAtFirstError: true,
  }))

  await initSystem(app)
  await app.listen(3000)
}
bootstrap()
