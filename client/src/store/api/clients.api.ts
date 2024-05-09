// src/services/api.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiResponse, Client } from "../../shared/models";

export const ClientsApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4200/" }),
  endpoints: (builder) => ({
    getClients: builder.query<Array<Client> | null, void>({
      query: () => "/clients",
      transformResponse: (response: ApiResponse<Array<Client>>) =>
        response.data,
    }),
  }),
});

export const { useGetClientsQuery } = ClientsApi;
