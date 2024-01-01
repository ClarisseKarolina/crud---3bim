import { ProdutoDTO } from "../dtos/produto.dto";
import { CreateProdutoService } from "../services/create-produto.service";
import { Request, Response } from "express";

export class CreateProdutoController {
    constructor(private readonly service: CreateProdutoService) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const produto = <ProdutoDTO>request.body
        await this.service.execute(produto)
        return response.json({ message: "Produto criado com sucesso "})
    }
}