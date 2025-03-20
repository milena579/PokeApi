"use client"
import { Menu } from "@/components/Menu";
import {CardAPI, Pokemon} from "../components/CardAPI"
import { useState, useEffect  } from "react";
import {api} from "./constants/api"
import Image from "next/image";

import letreiro  from "../../public/letreiro.png"

export default function Home() {
  const [cardsData, setCardsData] =  useState<Pokemon[]>([]);
  const [error, setError] = useState();
  
  const [page, setPage] = useState<string>("")

  useEffect(() =>{
    setCardsData([]);
     api.get(`pokemon?limit=10&offset=${page}`).then((res) => {
        res.data.results.forEach((pokemon: { url: string; name : string;}) => {
          api.get(pokemon.url.replace('https://pokeapi.co/api/v2/', ''))
          .then((info) => {
            console.log(info.data)
            let newlist = cardsData;
            newlist.push(info.data);
            setCardsData(newlist);
          })
        });
      })

      .then(() => {
        cardsData.sort;
      })

    }, [page])
  return(
    <>
    <Menu op1="Capturar Pokemons" op2="Meu Time"></Menu>
    <div className="flex flex-col gap-6 w-full h-full p-8 items-center">
      <div className="w-[500px]">
          <Image src={letreiro} alt="imagem" className="" />
      </div>
      <div>
        <div>
          <input className="w-80 h-12 p-4 border rounded-3xl outline-yellow-500 " type="text" value={page} placeholder="Digite a página..." onChange={(e) => setPage(e.target.value)} />
        </div>
      </div>
      <div className="flex gap-6 flex-wrap p-8 items-center justify-center">
        {cardsData.map((item, index) => {
          return (
                <CardAPI
                  key={index}
                  id={item.id}
                  name={item.name}
                  image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`}
                />            
              );
            })}
      </div>
    </div>
    </>
  )
}
