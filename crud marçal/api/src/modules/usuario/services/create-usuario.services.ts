import { UsuarioDTO } from "../dtos/usuario.dto";
import { UsuarioRepository } from "../repositories/usuario.repository";
import { UsuarioMapping } from "../mappings/usuario.mapping";

export class CreateUsuarioService {
    constructor(
        private readonly usuarioRepository: UsuarioRepository
    ) {}
    async execute(data: UsuarioDTO): Promise<void> {
        const usuario = UsuarioMapping.from(data)
        const resposta = await this.usuarioRepository.create(usuario)
    }
}