import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { livroDTO } from '../../DTO/livros.dto'

@Controller('livros')
export class LivrosController {

    @Get()
    getAllLivros(): string{
        return 'Todos os livros estão aqui ';
    }

    @Post()
    createLivro(@Body() novoLivro: livroDTO): livroDTO{
        return novoLivro;
    }

    @Patch()
    atualizarLivro(): string{
        return 'Este livro foi atualizado';
    }

    @Delete()
    deletarLivro(): string{
        return 'Este livro foi apagado'
    }

}
