export interface Pokemon{
    id: string,
    name: string,
    image: string,
}

export const CardAPI =  (props : Pokemon) => {
    return(
        <>
            <div className="flex flex-wrap bg-red-700 w-[300px] h-[400px] rounded-2xl items-center justify-center p-2 shadow-lg shadow-blue-300/100">
                <div className="flex items-center w-full h-[250px] justify-center bg-gray-800 p-8 rounded-2xl">
                    <img className="flex w-44 h-full" src={props.image} alt={props.name} />
                </div>
                <div className="flex-row items-center p-2 text-white w-full gap-14 text-lg">
                    <h1 className="flex text-lg">ID: {props.id}</h1>
                    <h1 className="flex text-lg">Name: {props.name}</h1>
                </div>
            </div>
        </>
    )
}