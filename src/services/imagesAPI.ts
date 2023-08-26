import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_API_URL } from '../app/variables';
import { Breed, Image } from '../app/types';

interface GetImagesArgs {
  breed_ids: string;
  limit: number;
}

export const imagesApi = createApi({
  reducerPath: 'imagesApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  endpoints: (builder) => ({
    getImageById: builder.query<Image, string>({
      query: (id: string) => `/images/${id}`,
    }),
    getImages: builder.query<Image[], GetImagesArgs>({
      query: ({ breed_ids, limit }) => ({
        url: '/images/search',
        params: {
          breed_ids,
          limit,
        },
      }),
    }),
  }),
});

export const { useGetImageByIdQuery, useGetImagesQuery } = imagesApi;
