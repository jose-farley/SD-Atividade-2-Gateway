import { Request, Response } from "express";
import axios from "axios";
import { ResponseModel } from "../util/ReponseModel";

export async function detailsController(req:Request, res:Response){
    try {
        let response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${req.query.id}`)
        let comments = await axios.get(`http://localhost:3030/api/v1/comments/${response.data.id}`)
        console.log(response.data)
        return res.json(new ResponseModel({
            comments:comments.data,
            data:response.data
        }, false))
    } catch (error) {
      
        return res.json(new ResponseModel("Houve um erro ao buscar o livro", true))
    }
    
}