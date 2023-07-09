import './App.scss'
import { useFetch } from './shared/hooks';
import { Client, Clients } from './shared/models';

function App() {
    const { data, loading, error } = useFetch < Array < Client >> ('http://localhost:4200/clients');
    console.log(error)
    return (
        <>
            {data?.map((client) => <p> {client.firstName}</p>)}
        </>
    )
}

export default App
