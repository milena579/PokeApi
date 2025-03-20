"use client"
import { Menu } from "@/components/Menu";
import {Card, Pokemon} from "../../components/Card"
import { useState, useEffect  } from "react";
import {api} from "../constants/api"
import Image from "next/image";

// import pokebola  from "../../../public/pokebola.png";

export default function Home() {
  const [cardsData, setCardsData] =  useState<Pokemon[]>([]);
  const [error, setError] = useState();
  
  const [page, setPage] = useState<string>("")

  useEffect(() =>{
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
    }, [page])
  return(
    <>
    <Menu op1={"Capturar Pokemons"} op2={"Meu Time"}></Menu>
    <div className="flex flex-col gap-6 w-full h-full p-8 items-center">
      <div className="flex gap-6 flex-wrap p-8 items-center justify-center">
        {cardsData.map((item, index) => {
          return (
                <Card
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
