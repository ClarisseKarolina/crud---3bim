import { UsuarioDTO } from "../dtos/usuario.dto";
import { CreateUsuarioService } from "../services/create-usuario.services";
import { Request, Response } from "express"

export class CreateUsuarioController {
    constructor(private readonly service: CreateUsuarioService) {} 
    async handle(request: Request, response: Response): Promise<Response> {
        const usuario = <UsuarioDTO>request.body
        await this.service.execute(usuario)
        return response.json({ message: "Usuário criado com sucesso "})
    }
}