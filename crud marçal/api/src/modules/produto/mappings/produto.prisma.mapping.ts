import { ProdutoEntity } from "../entities/produto.entity";
import { Produto } from "@prisma/client";

export class ProdutoPrismaMapping {
    static to(produto: Produto): ProdutoEntity {
        return {
            id: produto.id,
            nome: produto.nome,
            categoria: produto.categoria,
            valor: produto.valor,
            quantidade: produto.quantidade
        }
    }

    static from(produto: ProdutoEntity): Produto {
        return {
            id: produto.id,
            nome: produto.nome,
            categoria: produto.categoria,
            valor: produto.valor,
            quantidade: produto.quantidade
        }
    }
}