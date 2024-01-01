import { UsuarioEntity } from "../entities/usuario.entity";
import { Usuario } from "@prisma/client";

export class UsuarioPrismaMapping {
    static to(usuario: Usuario): UsuarioEntity {
        return {
            id: usuario.id,
            matricula: usuario.matricula,
            senha: usuario.senha
        }
    }

    static from(usuario: UsuarioEntity): Usuario {
        return {
            id: usuario.id,
            matricula: usuario.matricula,
            senha: usuario.senha
        }
    }
}