import { Router, Request, Response, request } from "express";
import { fetchBookController } from "./controller/fecthBook";
import { detailsController } from "./controller/detailsController";
import { addCommentController } from "./controller/comment/Add/Controller";


const router = Router()
//chave de api = AIzaSyD12A0fsN9RzkgSK3yN7IxVA0gYaHfwJsc
router.get("/livros", (req:Request, res:Response)=>{
   return fetchBookController(req, res)
})
router.get("/detalhes", (req:Request, res:Response)=>{
    return detailsController(req, res)
})

router.post("/comment", (req:Request, res:Response)=>{
    return addCommentController(req, res)
})


export {router}