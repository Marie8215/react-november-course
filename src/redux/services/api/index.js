import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  tagTypes: ["Reviews"],
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => "/restaurants",
    }),
    getRestaurantById: builder.query({
      query: (restaurantId) => `/restaurants/${restaurantId}`,
    }),
    getUsers: builder.query({
      query: () => "/users",
    }),
    getReviewsByRestaurantId: builder.query({
      query: (restaurantId) => `/reviews?restaurantId=${restaurantId}`,
      providesTags: (restaurantId) => [{ type: "Reviews", restaurantId }],
    }),
    getDishesByRestaurantId: builder.query({
      query: (restaurantId) => `/dishes?restaurantId=${restaurantId}`,
    }),
    getDishById: builder.query({
      query: (dishId) => `/dish/${dishId}`,
    }),
    addReview: builder.mutation({
      query: ({ restaurantId, review }) => ({
        url: `/review/${restaurantId}`,
        method: "POST",
        body: review,
      }),
      invalidatesTags: ({ restaurantId }) => [
        { type: "Reviews", restaurantId },
      ],
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetUsersQuery,
  useGetReviewsByRestaurantIdQuery,
  useGetDishesByRestaurantIdQuery,
  useGetDishByIdQuery,
  useAddReviewMutation,
} = apiSlice;
