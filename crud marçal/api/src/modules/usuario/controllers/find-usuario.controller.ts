import { FindUsuarioService } from "../services/find-usuario.service";
import { Request, Response } from "express";

export class FindUsuarioControler {
    constructor(private readonly service: FindUsuarioService) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const usuarios = await this.service.execute()
        return response.json(usuarios)
    }
}