import { ProdutoEntity } from "../entities/produto.entity";
import { ProdutoRepository } from "../repositories/produto.repository";

export class FindProdutoService {
    constructor(private readonly produtoRepository: ProdutoRepository) {}
    async execute(): Promise<ProdutoEntity[]> {
        const produtos = await this.produtoRepository.find()
        return produtos
    }
}