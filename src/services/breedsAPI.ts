import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_API_URL } from '../app/variables';
import { Breed } from '../app/types';

export const breedsApi = createApi({
  reducerPath: 'breedsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  endpoints: (builder) => ({
    getBreeds: builder.query<Breed[], string>({
      query: (search: string) => ({
        url: '/breeds',
        params: {
          search,
        },
      }),
    }),
    getBreedById: builder.query<Breed, string>({
      query: (id: string) => `/breeds/${id}`,
    }),
  }),
});

export const { useGetBreedsQuery, useGetBreedByIdQuery } = breedsApi;
