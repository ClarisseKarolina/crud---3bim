import { UsuarioEntity } from "../entities/usuario.entity";
import { UsuarioRepository } from "../repositories/usuario.repository";

export class FindUsuarioService { 
    constructor(private readonly usuarioRepository: UsuarioRepository) {}
    async execute(): Promise<UsuarioEntity[]> {
        const usuarios = await this.usuarioRepository.find()
        return usuarios
    }
}