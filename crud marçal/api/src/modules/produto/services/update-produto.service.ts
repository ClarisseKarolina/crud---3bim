import { ProdutoDTO } from "../dtos/produto.dto";
import { ProdutoMapping } from "../mappings/produto.mapping";
import { ProdutoRepository } from "../repositories/produto.repository";

export class UpdateProdutoService {
    constructor(private readonly produtoRepository: ProdutoRepository) {}
    async execute(id: number, data: ProdutoDTO): Promise<void> {
        const produto = ProdutoMapping.from(data)
        await this.produtoRepository.update(id, produto)
    }
}