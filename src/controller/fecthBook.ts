import { Request, Response } from "express";
import axios from "axios";
import { ResponseModel } from "../util/ReponseModel";

export async function fetchBookController(req:Request, res:Response){
    try {
        let response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.query.q}`)
        return res.json(new ResponseModel(response.data, false))
    } catch (error) {
        return res.json(new ResponseModel("Houve um erro ao buscar o livro", true))
    }
    
}