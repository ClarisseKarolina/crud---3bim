import { UsuarioEntity } from "../entities/usuario.entity";
import { UsuarioRepository } from "../repositories/usuario.repository";

export class FindOneUsuarioService { 
    constructor(private readonly usuarioRepository: UsuarioRepository) {}
    async execute(id: number): Promise<UsuarioEntity> {
        const usuario = await this.usuarioRepository.findById(id)
        return usuario
    }
}