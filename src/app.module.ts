import { Module } from '@nestjs/common';
import { LivrosController } from './Controllers/livros/livros.controller';


@Module({
  imports: [],
  controllers: [LivrosController],
  providers: [],
})
export class AppModule {}
