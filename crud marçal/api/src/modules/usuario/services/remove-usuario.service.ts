import { UsuarioRepository } from "../repositories/usuario.repository";

export class RemoveUsuarioService {
    constructor(private readonly usuarioRepository: UsuarioRepository) { }
    async execute(id: number): Promise<void> {
        await this.usuarioRepository.delete(id)
    }
}