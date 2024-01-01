import { PrismaUsuarioRepository } from "./repositories/implementations/prisma-usuario.repository";
import { CreateUsuarioService } from "./services/create-usuario.services";
import { CreateUsuarioController } from "./controllers/create-usuario.controller";
import { FindOneUsuarioController } from "./controllers/find-one-usuario.controller";
import { FindOneUsuarioService } from "./services/find-one-usuario.service";
import { FindUsuarioControler } from "./controllers/find-usuario.controller";
import { FindUsuarioService } from "./services/find-usuario.service";
import { RemoveUsuarioController } from "./controllers/remove-usuario.controller";
import { RemoveUsuarioService } from "./services/remove-usuario.service";
import { UpdateUsuarioController } from "./controllers/update-usuario.controller";
import { UpdateUsuarioService } from "./services/update-usuario.service";

const repository = new PrismaUsuarioRepository()

const createService = new CreateUsuarioService(repository)
const createController = new CreateUsuarioController(createService)

const findOneService = new FindOneUsuarioService(repository)
const findOneController = new FindOneUsuarioController(findOneService)

const findService = new FindUsuarioService(repository)
const findController = new FindUsuarioControler(findService)

const removeService = new RemoveUsuarioService(repository)
const removeController = new RemoveUsuarioController(removeService)

const updateService = new UpdateUsuarioService(repository)
const updateController = new UpdateUsuarioController(updateService)

export {
    createController,
    findOneController,
    findController,
    removeController,
    updateController
}