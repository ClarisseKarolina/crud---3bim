import {
    createController,
} from "../modules/usuario"

import { Router, Request, Response } from "express"

const routes = Router()

routes.post("/usuario", (req: Request, res: Response) => {
    createController.handle(req, res)
})

export default routes