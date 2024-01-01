import { UsuarioDTO } from "../dtos/usuario.dto";
import { UsuarioEntity } from "../entities/usuario.entity";

export class UsuarioMapping {
    static from(usuario: UsuarioDTO): UsuarioEntity {
        return {
            id: usuario.id,
            matricula: usuario.matricula,
            senha: usuario.senha
        }
    }
}