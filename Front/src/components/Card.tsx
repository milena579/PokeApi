export interface Pokemon{
    id: string,
    name: string,
    image: string,
}

export const Card =  (props : Pokemon) => {
    return(
        <>
            <div className="flex flex-wrap bg-white w-[280px] h-[350px] rounded-2xl items-center justify-center shadow-lg shadow-blue-900/100">
                <div className="flex items-center w-full h-[260px] justify-center p-6 rounded-2xl bg-[url('https://i.pinimg.com/originals/95/fc/30/95fc304b40461a9922bd1d3aff885496.png')] bg-no-repeat bg-cover">
                    <img className="flex w-36 h-full" src={props.image} alt={props.name} />
                </div>
                <div className="flex-row items-center p-4 text-white w-full gap-14 text-lg bg-red-600 rounded-b-2xl ">
                    <h1 className="flex text-lg">ID: {props.id}</h1>
                    <h1 className="flex text-lg capitalize">Name: {props.name}</h1>
                </div>
            </div>
        </>
    )
}