import { apiSlice } from "../api/apiSlice";

export const quizApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getQuizes: builder.query({
      query: () => "quizzes",
    }),
  }),
});

export const { useGetQuizesQuery } = quizApi;
