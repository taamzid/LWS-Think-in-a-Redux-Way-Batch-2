import { apiSlice } from "../api/apiSlice";

export const videosApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getvideos: builder.query({
      query: () => "videos",
    }),
    addVideo: builder.mutation({
      query: (data) => ({
        url: "/videos",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetvideosQuery, useAddVideoMutation } = videosApi;
