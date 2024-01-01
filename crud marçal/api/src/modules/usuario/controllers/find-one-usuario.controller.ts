import { FindOneUsuarioService } from "../services/find-one-usuario.service";
import { Request, Response } from "express";

export class FindOneUsuarioController {
    constructor(private readonly service: FindOneUsuarioService) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const usuario = await this.service.execute(Number(id))
        return response.json(usuario)
    }
}