import { RemoveUsuarioService } from "../services/remove-usuario.service";
import { Request, Response } from "express"

export class RemoveUsuarioController {
    constructor(private readonly service: RemoveUsuarioService) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        await this.service.execute(Number(id))
        return response.json({ message: "Usuário removido" })
    }
}