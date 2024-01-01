import { ProdutoDTO } from "../dtos/produto.dto";
import { ProdutoEntity } from "../entities/produto.entity";

export class ProdutoMapping {
    static from(produto: ProdutoDTO): ProdutoEntity {
        return {
            id: produto.id,
            nome: produto.nome,
            categoria: produto.categoria,
            valor: produto.valor,
            quantidade: produto.quantidade
        }
    }
}