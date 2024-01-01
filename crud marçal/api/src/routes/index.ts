import { Router } from "express";
import UsuarioRoutes from "./usuario.routes"

const routes = Router()

routes.use(UsuarioRoutes)

export default routes