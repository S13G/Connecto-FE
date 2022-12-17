import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios'

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params, }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params })
      return { data: result.data }
    } catch (axiosError) {
      let err = axiosError
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      }
    }
  }

export const transportApi = createApi({
    reducerPath: 'transportApi',
    baseQuery: axiosBaseQuery({
        baseUrl: 'https://connectotransfers.herokuapp.com/api',
    }),   
    endpoints: (builder) => ({
        getPlaces: builder.query({
            query: () => ({
                url: `/places/`,
                method: 'GET',
            }),
        }),
        getCountries: builder.query({
            query: () => ({
                url: `/countries/`,
                method: 'GET',
            }),
        }),
        getVehicles: builder.query({
            query: () => ({
                url: `/vehicles/`,
                method: 'GET',
            }),
        }),
        getEquimentTypes: builder.query({
            query: () => ({
                url: `/equipment-types/`,
                method: 'GET',
            }),
        }),
        bookVehicle: builder.mutation({
            query: (body) => ({
                url: `/verify-account/`,
                method: `POST`,
                data: body,
            }),
        }),
        reviewVehicle: builder.mutation({
            query: (body) => ({
                url: `/review-vehicle/`,
                method: `POST`,
                data: body,
            }),
        }),
        reviewPlace: builder.mutation({
            query: (body) => ({
                url: `/review-place/`,
                method: `POST`,
                data: body,
            }),
        }),
            
    })
})

export const {
    useGetPlacesQuery, useGetCountriesQuery, useGetVehiclesQuery, useGetEquimentTypesQuery, useBookVehicleMutation, useReviewVehicleMutation, useReviewPlaceMutation
} = transportApi;

export const { endpoints, reducerPath, reducer, middleware } = transportApi;