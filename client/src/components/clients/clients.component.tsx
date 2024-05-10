import { ReactElement } from "react";
import { useGetClientsQuery } from "../../store/api/clients.api";
import { Client } from "../../shared/models";


export const Clients = (): ReactElement => {
    const { data, error, isLoading } = useGetClientsQuery();
    console.log('data: ', data);


    if (error) return <p>Error</p>;
    if (isLoading) return <p>Loading...</p>;

    return (
        <>
            <h1>Clients</h1>
            <ul>
                {data?.map((client: Client) => (
                    <li key={client.id}>{client.firstName}</li>
                ))}
            </ul>
        </>
    )
}