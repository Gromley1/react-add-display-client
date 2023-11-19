import "./App.scss";
import { useFetch } from "./shared/hooks";
import { Client, Clients } from "./shared/models";

function App() {
    const { data, loading, error } = useFetch<Array<Client>>("http://localhost:4200/clients");


    const { clients } = data?.data as Clients;

    if (loading) return <p>Loading...</p>;

    return (
    <>
        {clients?.map((client) => (
        <p>{client.firstName}</p>
        ))}
    </>
    );
}

export default App;
