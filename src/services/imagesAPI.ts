import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_API_URL } from '../app/variables';
import { Direction, Image, UploadImage } from '../app/types';

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

    uploadPost: builder.mutation<UploadImage, Partial<UploadImage>>({
      query: (body) => {
        const formData = new FormData();
        Object.keys(body).forEach((key) => {
          const value = body[key as keyof UploadImage];
          if (value !== undefined) {
            formData.append(key, value);
          }
        });
        return {
          url: `images/upload`,
          method: 'POST',
          body: formData,
        };
      },
    }),
  }),
});

export const { useGetImageByIdQuery, useGetImagesQuery, useUploadPostMutation } = imagesApi;
