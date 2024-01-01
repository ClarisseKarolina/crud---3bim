import { ProdutoRepository } from "../repositories/produto.repository";

export class RemoveProdutoService {
    constructor(private readonly produtoRepository: ProdutoRepository) {}
    async execute(id: number): Promise<void> {
        await this.produtoRepository.delete(id)
    }
}