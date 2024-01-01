import { UsuarioDTO } from "../dtos/usuario.dto";
import { UsuarioMapping } from "../mappings/usuario.mapping";
import { UsuarioRepository } from "../repositories/usuario.repository";

export class UpdateUsuarioService {
    constructor(private readonly usuarioRepository: UsuarioRepository) {}
    async execute(id: number, data: UsuarioDTO): Promise<void> {
        const usuario = UsuarioMapping.from(data)
        await this.usuarioRepository.update(id, usuario)
    }
}