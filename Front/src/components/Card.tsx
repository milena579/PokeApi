export interface Pokemon{
    id: string,
    name: string,
    image: string,
}

export const Card =  (props : Pokemon) => {
    return(
        <>
            <div className="flex flex-wrap bg-amber-50 w-[300px] h-[400px] rounded-2xl items-center justify-center p-2 shadow-lg shadow-red-500/100">
                <div className="flex items-center w-full h-[250px] justify-center bg p-8 rounded-2xl bg-[url('C:\Users\Aluno\Desktop\PokeApi\Front\public\pokebola.png')]">
                    <img className="flex w-44 h-full" src={props.image} alt={props.name} />
                </div>
                <div className="flex-row items-center p-2 text-gray-900 w-full gap-14 text-lg">
                    <h1 className="flex text-lg">ID: {props.id}</h1>
                    <h1 className="flex text-lg capitalize">Name: {props.name}</h1>
                </div>
            </div>
        </>
    )
}