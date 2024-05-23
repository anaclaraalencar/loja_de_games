import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Produto } from './entities/produto.entity';
import { ProdutoController } from './controllers/produto.contoller';
import { ProdutoService } from './services/Produto.service';
import { CategoriaModule } from '../categoria/categoria.module';
import { CategoriaService } from '../categoria/services/categoria.service';

@Module({
  imports: [TypeOrmModule.forFeature([Produto]), CategoriaModule],
  providers: [ProdutoService, CategoriaService], 
  controllers: [ProdutoController],
  exports: [TypeOrmModule],
})
export class ProdutoModule {}