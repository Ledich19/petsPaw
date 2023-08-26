import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_API_URL } from '../app/variables';
import { Breed, Image } from '../app/types';

export const imagesApi = createApi({
  reducerPath: 'imagesApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  endpoints: (builder) => ({
    getImageById: builder.query<Image, string>({
      query: (id: string) => `/images/${id}`,
    }),
  }),
});

export const { useGetImageByIdQuery } = imagesApi;
