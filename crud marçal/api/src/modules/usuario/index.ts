import { PrismaUsuarioRepository } from "./repositories/implementations/prisma-usuario.repository";
import { CreateUsuarioService } from "./services/create-usuario.services";
import { CreateUsuarioController } from "./controllers/create-usuario.controller";

const repository = new PrismaUsuarioRepository()

const createService = new CreateUsuarioService(repository)
const createController = new CreateUsuarioController(createService)

export {
    createController,
}