import { ProdutoEntity } from "../entities/produto.entity";
import { ProdutoRepository } from "../repositories/produto.repository";

export class FindOneProdutoService {
    constructor(private readonly produtoRepository: ProdutoRepository) {}
    async execute(id: number): Promise<ProdutoEntity> {
        const produto = await this.produtoRepository.findById(id)
        return produto
    }
}