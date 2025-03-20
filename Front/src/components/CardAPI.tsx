"use client";
import axios from "axios";
import { useState, useEffect } from "react";

export interface Pokemon{
    id: string,
    name: string,
    image: string,
}

export const CardAPI =  (props : Pokemon) => {

    const [message, setMessage] = useState<string>("");

    const capturePokemon = async () => {
        try {
            const response = await axios.post(`http://localhost:8080/api/capture/${pokemon.id}`);
            setMessage(`Pokémon ${response.data.pokemon.name} capturado com sucesso!`);
            window.location.reload();
        } catch (error: any) {
            setMessage(error.response?.data?.message || "Erro ao capturar Pokémon!");
        }
    }

    return(
        <>
            <div className="flex flex-wrap bg-red-700 w-[300px] h-[400px] rounded-2xl items-center justify-center p-2 shadow-lg shadow-blue-300/100">
                <div className="flex items-center w-full h-[250px] justify-center bg-[url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c4e26f17-7dcd-43f1-bf80-ebd03eff0061/d4elxyc-f6e02f47-701d-41b6-b7b6-79e4cd1799ca.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M0ZTI2ZjE3LTdkY2QtNDNmMS1iZjgwLWViZDAzZWZmMDA2MVwvZDRlbHh5Yy1mNmUwMmY0Ny03MDFkLTQxYjYtYjdiNi03OWU0Y2QxNzk5Y2EucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fJkkLdU8Br7pnrbToTHb8gfV6FPAm9-eDAdA2qJkYuI')] bg-no-repeat bg-cover p-8 rounded-2xl">
                    <img className="flex w-44 h-full" src={props.image} alt={props.name} />
                </div>
                <div className="flex-row items-center p-2 text-white w-full gap-14 text-lg">
                    <h1 className="flex text-lg">ID: {props.id}</h1>
                    <h1 className="flex text-lg">Name: {props.name}</h1>
                </div>
                <div className="w-full">
                    <button className="bg-gray-800 text-white font-bold p-2 rounded-2xl w-full cursor-pointer hover:bg-yellow-400 hover:text-blue-800">
                        <h1>Capturar</h1>
                    </button>
                </div>
            </div>
        </>
    )
}