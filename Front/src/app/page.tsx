"use client"
import {CardAPI, Pokemon} from "../components/CardAPI"
import { useState, useEffect  } from "react";
import {api} from "./constants/api"

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
    <div className="flex flex-col gap-6 w-full h-full p-8 items-center">
      <div>

        <div>
          <input type="text" placeholder="Pagina"/>
        </div>
      </div>
      <div>
      </div>
      <div className="flex gap-6 flex-wrap w-full h-full p-8 items-center justify-center">
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
