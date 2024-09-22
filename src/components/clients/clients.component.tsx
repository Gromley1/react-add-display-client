import { ReactElement } from 'react';
import { useGetClientsQuery } from '../../store/api/clients.api';
import { Client } from '../../shared/models';
import styles from './clients.module.scss';

export const Clients = (): ReactElement => {
  const { data, error, isLoading } = useGetClientsQuery();

  if (error) return <p>Error</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <section className={styles.container}>
        <div className={styles.clients}>
          <h1>Clients</h1>

          {data?.map((client: Client) => (
            <div key={client.id}>
              <p className={styles.clientName}>{client.firstName}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
