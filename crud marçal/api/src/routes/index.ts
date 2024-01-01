import { Router } from "express";
import UsuarioRoutes from "./usuario.routes"
import ProdutoRoutes from "./produto.routes"

const routes = Router()

routes.use(UsuarioRoutes)
routes.use(ProdutoRoutes)

export default routes