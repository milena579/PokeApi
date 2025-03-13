interface Pokemon{
    id: number,
    name: string,
    image: string,
    rarity: number
}

export const Card =  (props : Pokemon) => {
    return(
        <>
            <div className="flex flex-wrap bg-red-700 w-[300px] h-[300px] rounded-4xl items-center justify-center">
                <div>
                    <img src={props.image} alt={props.name} />
                </div>
                <div>
                    <h1>{props.name}</h1>
                    <h1>{props.rarity}</h1>
                </div>
            </div>
        </>
    )
}