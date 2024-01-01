import { 
    createController,
    findOneController,
    findController,
    removeController,
    updateController
} from "../modules/produto"


import { Router, Request, Response } from "express"

const routes = Router()

routes.post("/produto", (req: Request, res: Response) => {
    createController.handle(req, res)
})

routes.get("/produto", (req: Request, res: Response) => {
    findController.handle(req, res)
})

routes.get("/produto/:id", (req: Request, res: Response) => {
    findOneController.handle(req, res)
})

routes.delete("/produto/:id", (req: Request, res: Response) => {
    removeController.handle(req, res)
})

routes.put("/produto/:id", (req: Request, res: Response) => {
    updateController.handle(req, res)
})

export default routes