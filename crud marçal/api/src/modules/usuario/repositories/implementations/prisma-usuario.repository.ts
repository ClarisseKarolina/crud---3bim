import { PrismaClient } from "@prisma/client";
import { UsuarioEntity } from "../../entities/usuario.entity";
import { UsuarioPrismaMapping } from "../../mappings/usuario.prisma.mapping";
import { UsuarioRepository } from "../usuario.repository";

export class PrismaUsuarioRepository implements UsuarioRepository {
    private prisma 
    constructor(){
        this.prisma = new PrismaClient()
    }

    async create(data: UsuarioEntity): Promise<void> {
        try {
            const usuario = UsuarioPrismaMapping.from(data)
            await this.prisma.usuario.create({ data: usuario })
        } catch (error) {
            console.log(error)
            throw new Error("Erro em criar usuário")
        }
    }

    async findById(id: number): Promise<UsuarioEntity> {
        try{
            const usuario = await this.prisma.usuario.findUniqueOrThrow({ where: { id }})
            return UsuarioPrismaMapping.to(usuario)
        } catch(error){
            console.log(error)
            throw new Error("Erro em encontrar usuário")
        }
    }

    async find(): Promise<UsuarioEntity[]> {
        try {
            const usuario = await this.prisma.usuario.findMany()
            return usuario.map(usuario => UsuarioPrismaMapping.to(usuario))
        } catch (error) {
            console.log(error)
            throw new Error("Erro em encontrar todos os usuários")
        }
    }

    async update(id: number, data: UsuarioEntity): Promise<void> {
        try {
            const usuario = UsuarioPrismaMapping.from(data)
            await this.prisma.usuario.update({ where: {id}, data: usuario})
        } catch (error) {
            console.log(error)
            throw new Error("Erro em atualizar o usuário")
        }
    }

    async delete(id: number): Promise<void> {
        try {
            await this.prisma.usuario.delete({ where: { id } })
        } catch (error) {
            console.log(error)
            throw new Error("Erro em deletar o usuário")
        }
    }

}