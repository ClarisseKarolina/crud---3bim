import { ProdutoDTO } from "../dtos/produto.dto";
import { ProdutoRepository } from "../repositories/produto.repository";
import { ProdutoMapping } from '../mappings/produto.mapping';

export class CreateProdutoService {
    constructor(private readonly produtoRepository: ProdutoRepository) {}
    async execute(data: ProdutoDTO): Promise<void> {
        const produto = ProdutoMapping.from(data)
        const resposta = await this.produtoRepository.create(produto)
    }
}