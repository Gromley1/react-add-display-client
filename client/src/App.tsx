import { useState } from "react";
import "./App.scss";
import { useFetch } from "./shared/hooks";
import { Client } from "./shared/models";

function App() {
    const { data: clients, loading, error } = useFetch<Array<Client>>("http://localhost:4200/clients");

    if (error) return <p>Error</p>;

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
