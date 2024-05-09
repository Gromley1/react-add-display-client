import { ReactElement } from "react";
import { useGetClientsQuery } from "../../store/api/clients.api";


export const Clients = (): ReactElement => {
    const { data, error, isLoading } = useGetClientsQuery();
    

    console.log(data)

    if (error) return <p>Error</p>;

    if (isLoading) return <p>Loading...</p>;



    return (
        <>
        {/* {clientsArray.map((client) => 
            <p key={client.id}>{client.firstName}</p>
        )} */}
        </>
    )
}