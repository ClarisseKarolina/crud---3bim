import { RemoveProdutoService } from "../services/remove-produto.service"
import { Request, Response } from "express"

export class RemoveProdutoController {
    constructor(private readonly service: RemoveProdutoService) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        await this.service.execute(Number(id))
        return response.json({ message: "Produto foi removido" })
    }
}