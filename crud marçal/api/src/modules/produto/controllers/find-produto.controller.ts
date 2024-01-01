import { FindProdutoService } from "../services/find-produto.service";
import { Request, Response } from "express";

export class FindProdutoController {
    constructor(private readonly service: FindProdutoService) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const produtos = await this.service.execute()
        return response.json(produtos)
    }
}