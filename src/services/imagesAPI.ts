import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_API_URL } from '../app/variables';
import { Direction, Image } from '../app/types';

interface GetImagesArgs {
  breed_ids: string;
  limit: string;
  order: Direction;
  mime_types: string;
}

export const imagesApi = createApi({
  reducerPath: 'imagesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = import.meta.env.VITE_API_KEY;
      if (token) {
        headers.set('x-api-key', `${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getImageById: builder.query<Image, string>({
      query: (id: string) => `/images/${id}`,
    }),
    getImages: builder.query<Image[], GetImagesArgs>({
      query: ({ breed_ids, limit, order, mime_types }) => ({
        url: '/images/search',
        params: {
          breed_ids,
          limit,
          order,
          mime_types,
        },
      }),
    }),
  }),
});

export const { useGetImageByIdQuery, useGetImagesQuery } = imagesApi;
