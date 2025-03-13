import PokemonService from "../services/PokemonService.ts";
import { Request, Response } from "express";

class PokemonController{
    static async postCapture(req: Request, res: Response){
        const {id} = req.params;
        try{
            if(await PokemonService.Capture({id : Number(id)})){
                return res.status(202).json({message: "Capturado com sucesso"});
            }
            return res.status(401).json({message: "Não foi possivel capturar"});
        } catch(erro){
            return res.status(401).json({message: "Pokemon já capturado"});
        }

    }

    static async getTeam(req: Request, res: Response){    
        return res.status(202).json({data: await PokemonService.Team()});
        
    }
}

export default PokemonController;