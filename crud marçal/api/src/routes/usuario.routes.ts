import {
    createController,
    findOneController,
    findController,
    removeController,
    updateController
} from "../modules/usuario"

import { Router, Request, Response } from "express"

const routes = Router()

routes.post("/usuario", (req: Request, res: Response) => {
    createController.handle(req, res)
})

routes.get("/usuario", (req: Request, res: Response) => {
    findController.handle(req, res)
})

routes.get("/usuario/:id", (req: Request, res: Response) => {
    findOneController.handle(req, res)
})

routes.delete("/usuario/:id", (req: Request, res: Response) => {
    removeController.handle(req, res)
})

routes.put("/usuario/:id", (req: Request, res: Response) => {
    updateController.handle(req, res)
})

export default routes