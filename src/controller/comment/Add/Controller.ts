import { Request, Response } from "express";
import axios from "axios";
import { ResponseModel } from "../../../util/ReponseModel";
import { AddCommentDTO } from "./DTO";

export async function addCommentController(req:Request, res:Response){
    try {
        let data = req.body as AddCommentDTO
        let response = await axios.post("http://localhost:3030/api/v1/comments", data)
        if(response.data.has_error){
            return res.json(new ResponseModel("Houve um erro ao buscar o livro", true))
        }else {
            return res.json(new ResponseModel(response.data, false))
        }      
    } catch (error) {
        return res.json(new ResponseModel("Houve um erro ao buscar o livro", true))
    }
    
}