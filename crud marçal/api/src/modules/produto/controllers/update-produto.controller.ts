import { ProdutoDTO } from "../dtos/produto.dto";
import { UpdateProdutoService } from "../services/update-produto.service";
import { Request, Response } from "express";

export class UpdateProdutoController {
    constructor(private readonly service: UpdateProdutoService) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const data = <ProdutoDTO>request.body
        await this.service.execute(Number(id), data)
        return response.json({ message: "Produto foi atualizado"})
    }
}