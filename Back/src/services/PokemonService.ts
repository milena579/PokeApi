import { error } from "console";
import { ResponseAPI } from "../../dto/CaptureRateDto.ts";
import { Pokemon } from "../../dto/PokemonDto.ts";
import {api} from "../constants/api.ts";
import {prisma} from "../lib/prisma.ts"
export default class PokemonService{
    static async Capture(data: Pokemon){
        const select = await prisma.pokemon.findUnique({where:{id: data.id}})

        if(select != null){
            throw Error("Pokemon ja capturado");
        }

        const dado = await api.get<ResponseAPI>(`pokemon-species/${data.id}`)
        const value_capture =  await dado.data.capture_rate

        let change : number = Math.random()*100;
        
        if(change > value_capture){
            return false;
        }

        await prisma.pokemon.create({
            data: {
                id: data.id,
                name: dado.data.name,
                rarity: value_capture,
            }
        });

        return true;
    }
    static async Team(){
        return await prisma.pokemon.findMany()
    }
}