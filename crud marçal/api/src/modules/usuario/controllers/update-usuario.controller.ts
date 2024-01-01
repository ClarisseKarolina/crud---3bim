import { UsuarioDTO } from "../dtos/usuario.dto";
import { UpdateUsuarioService } from "../services/update-usuario.service";
import { Request, Response } from "express";

export class UpdateUsuarioController {
    constructor(private readonly service: UpdateUsuarioService) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const data = <UsuarioDTO>request.body
        await this.service.execute(Number(id), data)
        return response.json({ message: "Usuário atualizado"})
    }
}
