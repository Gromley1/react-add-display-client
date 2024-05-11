import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Client } from "../../shared/models";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../App";

export const firebaseApi = createApi({
  reducerPath: "firebaseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    getClients: builder.query<Client[], void>({
      queryFn: async () => {
        try {
          const querySnapshot = await getDocs(collection(db, "clients"));
          const clients: Array<Client> = querySnapshot.docs.map((doc) => ({
            ...(doc.data() as Client),
          }));
          return { data: clients };
        } catch (error) {
          return { error: { status: "CUSTOM_ERROR", error: "" } };
        }
      },
    }),
  }),
});

export const { useGetClientsQuery } = firebaseApi;
